import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import OTP from './OtpField'
import { Circles } from 'react-loader-spinner';

export default function VerificationModal({ setotps, open, setModal, submitUserOTP, inProgress }) {
    const cancelButtonRef = useRef(null);

    const handleInput = (e) => {
        const val = e.target.value;
        const name = e.target.id;
        setotps(prevState => ({
            ...prevState,
            [name]: val
        }));
    }

    const submitHandler = (e) => {
        submitUserOTP();
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                                            <Dialog.Title as="h1" className="font-semibold leading-6 text-gray-900">
                                                OTP Verification
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <div className="max-w-sm mx-auto md:max-w-lg">
                                                    <div className="w-full">
                                                        <div className="bg-white h-64 py-3 rounded text-center">
                                                            {/* <div className="flex flex-col mt-4">
                                                                <span>Enter the OTP you received at</span>
                                                                <span className="font-bold">+91 ******876</span>
                                                            </div> */}

                                                            <div id="otp" className="flex flex-row justify-center text-center px-2">
                                                                <input className="m-2 border h-10 w-1/2 text-center form-control rounded"
                                                                    placeholder='Phone OTP'
                                                                    onChange={handleInput} type="text" id="phoneOtp" maxLength="6" />
                                                            </div>
                                                            <div id="otp" className="flex flex-row justify-center text-center px-2">
                                                                <input className="m-2 border h-10 w-1/2 text-center form-control rounded"
                                                                    placeholder='Email OTP'
                                                                    onChange={handleInput} type="text" id="emailOtp" maxLength="6" />
                                                            </div>
                                                            <div>
                                                                {(inProgress) ? <Circles
                                                                    height="20"
                                                                    width="20"
                                                                    color="#3498db"
                                                                    ariaLabel="circles-loading"
                                                                    wrapperStyle={{marginLeft : '205px'}}
                                                                    wrapperClass=""
                                                                    visible={true}
                                                                /> :
                                                                    <button id="confirm" className="button primary normal" onClick={submitHandler}>Submit</button>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
