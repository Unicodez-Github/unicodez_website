export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-[#FBF8FB] text-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-5xl font-bold mb-4 text-unicodez-dark">
            Let's Talk Enterprise Solutions
          </h2>
          <p className="text-xl opacity-80 mb-6 text-unicodez-text">
            Start a conversation with our team today and explore what we can do together.
          </p>
        </div>

        <div className="w-full max-w-[420px]">
          <iframe
            src="https://pre.dev/iframe/enterprise/chat/526dff44-5732-4dba-b60c-e5dc2ebc1143"
            width="100%"
            height="590px"
            className="w-full rounded-xl border border-gray-300 shadow-lg"
            loading="lazy"
            title="Enterprise Chat Widget"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
