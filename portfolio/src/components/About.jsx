const About = () => {
  const Paragraph = "text-[1.2rem]";
  return (
    <div className="px-5 py-3 flex justify-center">
      <section>
        <div className="flex gap-2 items-center px-5 py-2">
          <div className="text-5xl">🎓</div>
          <h1 className="text-3xl font">Education</h1>
        </div>
        <div className="bg-[#CAE8BD] w-[55vw] h-[550px] flex flex-col justify-center px-5 ">
          <div className="mb-6">
            <h1 className="text-2xl">⏳College</h1>
            <div className={Paragraph}>
              <p>Philippine College of Science and Technology</p>
              <p>Bachelor of Science in Information Technology</p>
              <p>School Year: 2023 – 2025 (Present)</p>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl">✔Senior High School</h1>
            <div className={Paragraph}>
              <p>Daniel Maramba National High School</p>
              <p>
                Strand: Technical-Vocational-Livelihood (TVL) – ICT (Information
                and Communication Technology)
              </p>
              <p> School Year: 2021 – 2023</p>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl">✔Junior High School</h1>
            <div className={Paragraph}>
              <p>Daniel Maramba National High School</p>
              <p>School Year: 2018 – 2021</p>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-2xl">✔Elementary</h1>
            <div className={Paragraph}>
              <p>Sonquil Elementary School</p>
              <p>School Year: 2012 – 2017</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#DDF6D2] w-[40vw] h-[500px]">
          <div className="flex gap-2 items-center">
            <div className="text-5xl">🧠</div>
            <h1 className="text-2xl">Skills</h1>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
