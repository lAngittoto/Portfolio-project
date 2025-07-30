import HandleImgs from "./HandleImgs";
import Matcha from "../assets/Images/Matcha.png";
const Project = () => {
  return (
    <>
      <div className="px-5 py-5">
        <h1>Click any project images below to view it on GitHub.</h1>
        <h1>
          Check my Github Profile.{" "}
          <span>
            <a
              href="https://github.com/lAngittoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#CAE8BD] px-5 py-2 rounded-2xl text-emerald-800 cursor-pointer">
                Click
              </button>
            </a>
          </span>
        </h1>
        <section className="px-5 py-5">
          <div className="bg-[#CAE8BD] w-[300px] h-[200px] flex flex-col justify-center items-center rounded-2xl">
            <HandleImgs
              ProjectImages={{
                Image: Matcha,
                Title: "First Project.",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default Project;
