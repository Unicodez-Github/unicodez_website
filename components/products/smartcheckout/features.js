export default function Features() {
  return (
    <section className="w-full pt-10" data-aos="zoom-in">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Smart Checkout Features
          </h2>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-10 mt-20">
          <div className="w-full max-w-xl lg:max-w-md flex flex-col items-start text-left p-10 rounded-3xl min-h-[300px] bg-[#D1E6EB]">
            <h3 className="text-left text-2xl font-semibold max-w-xs leading-10">
              Quick Scan
            </h3>
            <p className="mt-10 leading-10">
              Scan barcodes in milliseconds. Complete checkout super quickly.
            </p>
          </div>
          <div className="w-full max-w-xl lg:max-w-md flex flex-col items-start text-left p-10 rounded-3xl min-h-[300px] bg-[#000000]">
            <h3 className="text-white text-left text-2xl font-semibold max-w-xs leading-10">
              IOS and Android Compatible
            </h3>
            <p className="text-white mt-10 leading-10">
              Works with Apple and Android devices.
            </p>
          </div>
          <div className="w-full max-w-xl lg:max-w-md flex flex-col items-start text-left p-10 rounded-3xl min-h-[300px] bg-[#F7F6BE]">
            <h3 className="text-left text-2xl font-semibold max-w-xs leading-10">
              Interactive UI
            </h3>
            <p className="mt-10 leading-10">
              Easy and straight forward process without any complexities.
            </p>
          </div>
          <div className="w-full max-w-xl lg:max-w-md flex flex-col items-start text-left p-10 rounded-3xl min-h-[300px] bg-[#F8E4D1]">
            <h3 className="text-left text-2xl font-semibold max-w-xs leading-10">
              Safe and Secure
            </h3>
            <p className="mt-10 leading-10">
              Smart Checkout App requires password to access and transact. Your
              payment details are safe and cannot be accessed.
            </p>
          </div>
          <div className="w-full max-w-xl lg:max-w-md flex flex-col items-start text-left p-10 rounded-3xl min-h-[300px] bg-[#F0F4FF]">
            <h3 className="text-left text-2xl font-semibold max-w-xs leading-10">
              Pro-Social Distancing
            </h3>
            <p className="mt-10 leading-10">
              No contact or communication with anyone is necessary. Stay
              distanced and safe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
