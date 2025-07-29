const About = () => {
  const Paragraph = "lg:text-[1.2rem] md:text-[1.2rem] text-sm ";
  return (
    <div className="px-5 py-3 flex lg:flex-row justify-center md:flex-col flex-col overflow-hidden md:items-center items-center">
      <section>
        <div className="flex gap-2 items-center lg:px-5 lg:py-2 md:px-5 md:py-2 px-15 py-5">
          <div className="lg:text-5xl md:text-5xl text-3xl ">🎓</div>
          <h1 className="lg:text-3xl md:text-3xl text-2xl">Education</h1>
        </div>
        <div className="bg-[#CAE8BD] lg:w-[550px] lg:h-[550px] flex flex-col justify-center item px-5 md:w-[550px] md:h-[550px]">
          <div className="mb-4">
            <h1 className="text-2xl">⏳College</h1>
            <div className={Paragraph}>
              <p>Philippine College of Science and Technology</p>
              <p>Bachelor of Science in Information Technology</p>
              <p>School Year: 2023 – 2025 (Present)</p>
            </div>
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
            <h1 className="text-2xl">✔Junior High School</h1>
            <div className={Paragraph}>
              <p>Daniel Maramba National High School</p>
              <p>School Year: 2018 – 2021</p>
            </div>
          </div>
          <div className="mb-4">
            <h1 className="text-2xl">✔Elementary</h1>
            <div className={Paragraph}>
              <p>Sonquil Elementary School</p>
              <p>School Year: 2012 – 2017</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex gap-2 items-center  px-5 py-2">
          <div className="text-5xl">🧠</div>
          <h1 className="text-3xl">Skills</h1>
        </div>
        <div className="bg-[#DDF6D2] lg:w-[450px] lg:h-[550px] flex flex-col px-5 justify-center py-1 md:w-[450px] md:h-[550px]">
          <h1 className="text-[1.2rem]">Languages I Know – Basics & Fundamentals</h1>
          <div className=" py-5 flex">
            <div className="flex flex-row w-[70px] gap-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                alt="Python"
              />
              <img
                src="https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon.png?w=360"
                alt="Java"
              />
              <img
                src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/C-2.png"
                alt="C++"
              />
              <img
                src="https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg"
                alt="JS"
              />
            </div>
          </div>
           <h1 className="text-[1.2rem]">Technologies I Use in Web Development</h1>
          <div>
            <div className="flex flex-row w-[70px] gap-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rJ4mP9FHsLOTURgpRk3ebMCubNKphTcQtQ&s"
                alt="HTML"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC7WbEEnIBtUCb9TOxa6HCLse6Uhbm1C_ufA&s"
                alt="CSS"
              />
              <img
                src="https://cdn.sanity.io/images/3do82whm/next/a69e3ba2441d35dd1a7945e826064708f30c10a9-1000x667.jpg"
                alt="JS"
              />
              <img src="https://miro.medium.com/v2/resize:fit:1400/0*_7TbGJttYCTp_HWV.png" alt="React.js" />
            </div>
            <div className="w-[70px] flex gap-5 pt-5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwindcss" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb-fSo1hYjeDsNGVmazx5ih_okrC7YZtUctg&s" alt="Font Awosome" />
              <img src="https://miro.medium.com/v2/resize:fit:1200/1*1hpObQWyoa8_Iu2op0RKZA.png" alt="Git Hub/ Git" />
            </div>
          </div>
            <div className="mb-6">
            <h1 className="text-[1.2rem]">Others:</h1>
            <div className="text-[1rem]">
              <p>Repairing personal computer and laptop.</p>
              <p>Basic Networking.</p>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};
export default About;
