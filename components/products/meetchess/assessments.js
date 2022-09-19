import Image from "next/image";
export default function Assessments() {
  return (
    <section className="py-24 mt-20" data-aos="fade-up">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="lg:mt-10">
            <h2 className="section-title">Assessments</h2>
            <p className="mt-10 text-unicodez-text text-lg leading-[40px]">
              Meetchess platform has inbuilt and customizable quizzes,
              tournaments, SIMUL, and daily lessons or puzzles that coaches can
              assign at will. Coaches can also monitor, record, and assess
              students’ progress over periods.
            </p>
          </div>
          <div>
            <div className="w-full h-full relative lg:-mt-12">
              <Image
                src={"/images/products/assessments.png"}
                alt="Assessments in chess game"
                layout="responsive"
                objectFit="contain"
                width={"100%"}
                height={"70%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
