/* global grecaptcha */
import { useEffect, useRef, useState } from "react";
import Router from "next/router";
import 'react-phone-number-input/style.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhoneInput from 'react-phone-number-input'
import { emptyStr, validate_email } from "./validate";
import Reaptcha from "reaptcha";
import { REACT_APP_SITE_KEY } from "../utils/constant";
import VerificationModal from "./VerificationModal";
import { notifyError, notifySuccess } from "../utils/notificationCollection";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { addDetailsToUsers, firebaseAuth, getFireData } from "./FirebaseSDK";
import axios from "axios";
import { encrypt } from "./helpers";
import { Circles } from "react-loader-spinner";


export default function ContactForm() {
  let baseURL = "https://unicodez-website-backend.herokuapp.com";
  // let baseURL = "http://localhost:2000"
  const [form, setform] = useState({ from_name: '', from_email: '', from_contact: '', from_message: '' });
  const [confirmPhone, setConfirmPhone] = useState(null);
  const [otps, setotps] = useState({});
  const [receivedOTP, setreceivedOTP] = useState('');
  const [modal, setModal] = useState(false);
  const [phoneNumber, setphoneNumber] = useState();
  const [inProgress, setinProgress] = useState(false);
  const [modalProgress, setmodalProgress] = useState(false);

  // const [recaptchaReady, setrecaptchaReady] = useState(true);
  // const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setform(prevState => ({
      ...prevState,
      [name]: value
    })
    )
  };


  // const verify = () => {
  //   captchaRef.current.getResponse().then(res => {
  //     setrecaptchaReady(false);
  //     setCaptchaToken(res);
  //   }).catch(err => {
  //     console.log(err)
  //   })

  // }

  useEffect(() => {
    if (window.localStorage.getItem('formData') != null) {
      let localData = JSON.parse(window.localStorage.getItem('formData'));
      // console.debug(localData);
      setform(localData);
    }
  }, [])


  const submitHandler = async (e) => {
    setinProgress(true);
    e.preventDefault();
    let data = {
      name: form.from_name,
      email: form.from_email,
      phone: phoneNumber,
      text: form.from_message

    }

    let slug = form.from_email.split('@');
    if (slug === 'hotmail.com' || slug === 'live.com') {
      return;
    }
    if (!form.from_email || !phoneNumber || !form.from_name || !form.from_message) {
      setinProgress(false);
      notifyError("Please Fill Out All details");
      // Router.reload(window.location.pathname)
      return;
    }
    let k = await getFireData(form.from_email, phoneNumber, 'contacts');
    if (k) {
      notifySuccess("Your Query Has already been Registered");
      Router.push("/thankyou");
      return;
    }
    /* Stop Form for testing */
    window.localStorage.setItem('formData', JSON.stringify(data));
    const emailOTP = await getEmailOtp();
    setreceivedOTP(emailOTP);
    sendOTPToPhone();
    setModal(true);

  }


  const sendOTPToPhone = (e) => {
    window.recaptchaVerifier = new RecaptchaVerifier('verify', {
      'size': 'invisible',
      'callback': (response) => {
        onSignInSubmit();
      }
    }, firebaseAuth)
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
      .then(confirmResult => {
        setConfirmPhone(confirmResult);
        setModal(true);
      })
      .catch(err => {
        notifyError('Error in sending phone OTP');
        Router.reload();
        setinProgress(false)
      })
  }

  const getEmailOtp = async () => {
    const { data: res } = await axios.get(`${baseURL}/generate-token`, {
      params: {
        email: form.from_email,
      },
    })
    return encrypt(res);
  }

  const submitUserOTP = async () => {
    let phone = false;
    let email = false;
    setmodalProgress(true);
    if (otps.emailOtp == receivedOTP) {
      email = true;

    } else {
      notifyError('Please Enter Correct OTP of Email')
    }
    await confirmPhone.confirm(otps.phoneOtp)
      .then(result => {
        phone = true;
      })
      .catch(err => Router.reload())
    if (phone && email) {
      // bug
      setmodalProgress(false);
      notifySuccess("Your Query Has Been Registered. Thankyou");
      setModal(false);
      sendEmail();
    }
    return;
  }

  const sendEmail = async () => {
    let data = {
      name: form.from_name,
      email: form.from_email,
      phone: phoneNumber,
      text: form.from_message
    }
    await addDetailsToUsers(form.from_email, phoneNumber, 'contacts');
    axios.post(`${baseURL}/send-email`, data)
      .then((res) => {
        notifySuccess('Your query is registered !');
        Router.push("/thankyou");
      })
      .catch(err => {
        notifyError('Please Try After Some Time');

      })
  }

  return (
    <section className="w-full py-24" data-aod="fade-up">
      <ToastContainer />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#FFF2CD] p-10 rounded-3xl">

            <h2 className="section-title font-medium text-lg lg:text-3xl lg:leading-snug max-w-md b">
              Leave us a little info, and we&lsquo;ll be in touch.
              {modal && <VerificationModal inProgress={modalProgress} setotps={setotps} open={modal} setModal={setModal} submitUserOTP={submitUserOTP} />}
            </h2>
            <form>
              <div className="space-y-10 mt-16">
                <input
                  type="text"
                  className="w-full border p-4 outline-none appearance-none rounded bg-white text-unicodez-dark text-base py-4 px-7"
                  placeholder="Enter Your Name"
                  name="from_name"
                  required
                  value={form.from_name || ''}
                  onChange={formHandler}
                />

                <PhoneInput
                  className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7 outline-none border-none "
                  placeholder="Enter phone number"
                  name="from_name"
                  onChange={setphoneNumber} />
                <input
                  type="email"
                  className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7"
                  placeholder="email@gmail.com"
                  required
                  name="from_email"
                  onChange={formHandler}

                />
                <textarea
                  rows={10}
                  className="w-full rounded bg-white text-unicodez-dark text-base py-4 px-7 resize-none"
                  placeholder="How can we help?"
                  name="from_message"
                  required
                  onChange={formHandler}
                />
                {/* <Reaptcha
                  sitekey={REACT_APP_SITE_KEY}
                  ref={captchaRef}
                  onVerify={verify}
                ></Reaptcha> */}
                <div className="mb-10">
                  {/* disabled={recaptchaReady} */}
                  {(inProgress) ? <Circles
                    height="40"
                    width="40"
                    color="#3498db"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                  /> :
                    <button id="verifyForm" className="button primary normal disabled:bg-slate-100" onClick={submitHandler} >Submit</button>
                  }

                  <div id="verify"></div>

                </div>
              </div>
            </form>
          </div>
          <div className="bg-[#D1E6EB] p-10 rounded-3xl">
            <h2 className="section-title font-medium text-lg lg:text-3xl leading-snug max-w-md">
              Plan A Visit
            </h2>
            <div className="mt-10">
              <h4 className="text-unicodez-dark font-bold text-lg">
                Working hours:
              </h4>
              <div className="flex items-center space-x-8 text-lg text-unicodez-dark mt-4">
                <span>Monday - Friday</span>
                <span>(9 am to 7 pm EST)</span>
              </div>
            </div>
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7557670560195!2d-75.5533080843079!3d39.74513670413234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd6a9dfc32a9%3A0xab073c5880e220d7!2s831%20N%20Tatnall%20St%2C%20Wilmington%2C%20DE%2019801%2C%20USA!5e0!3m2!1sen!2sng!4v1660511553349!5m2!1sen!2sng"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-[20px]"
              />
            </div>
            <div className="grid grid-cols-2 mt-10">
              <div>
                <h4 className="text-unicodez-dark font-bold text-lg uppercase">
                  Headquarters
                </h4>
                <div className="space-y-2.5 text-unicodez-dark text-lg mt-5">
                  <p>USA</p>
                  <p>831 N Tatnall Street Wilmington,</p>
                  <p>DE 19801 USA</p>
                </div>
              </div>
              <div>
                <h4 className="text-unicodez-dark font-bold text-lg uppercase">
                  India Office
                </h4>
                <div className="space-y-2.5 text-unicodez-dark text-lg mt-5">
                  <p>BHOPAL</p>
                  <p>Hall no. 9 & 10, 6th Floor,</p>
                  <p>Regal Treasure,</p>
                  <p>462041</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
