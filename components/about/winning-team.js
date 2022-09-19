import GrowingBigger from "./growing-bigger";
import StartedSmall from "./started-small";
import WeConsistent from "./we-consistent";
export default function WinningTeam() {
  return (
    <section className="w-full pt-10" data-aos="fade-up">
      <div className="container">
        <div className="flex flex-col justify-center items-center text-unicodez-dark">
          <h2 className="section-title text-center leading-snug">
            Join The Winning Team
          </h2>
          <p className="mt-4 text-unicodez-text text-xl font-medium text-center">
            We explore some of the latest trends and strategies
          </p>
        </div>
      </div>
      <StartedSmall />
      <WeConsistent />
      <GrowingBigger />
    </section>
  );
}
