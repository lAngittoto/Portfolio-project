const Home = () => {
  return (
    <>
        <section className="flex flex-col items-center px-5 py-7  min-h-screen justify-around ">
             <div className="flex flex-col items-center gap-5 md:flex-col lg:flex-row " >
          <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="Picture" className="lg:w-[400px] lg:h-[380px] w-[300px] " />
          <div className="flex flex-col justify-between  h-[380px] items-center mb-5">
            <h1 className="lg:text-6xl text-5xl font-bold font-mono">
              Hi, Allan S. <span className="text-[#B0DB9C]">Aranda III</span>
            </h1>
            <div className="bg-[#CAE8BD] px-5 py-5 w-full  lg:h-[250px] h-[200px] md:h-[250px] flex justify-center items-center md:w-full  ">
              <h1 className="lg:text-3xl text-center leading-snug font-light t md:text-2xl">
               I'm a 19-year-old BSIT 3rd year student from Sta. Barbara,
              Pangasinan. I'm interested in coding, and I want to improve my
              critical thinking and problem-solving skills. </h1>
            </div>
        
          </div>
          
          
             </div>
    
             <h1 className="text-2xl text-center leading-snug font-mono lg:text-5xl ">
          “Aspiring Full-Stack Developer | BSIT Student | <span className="text-[#B0DB9C]">Passionate about Web
          Development</span>.” </h1>
             
        </section>

    </>
  );
};
export default Home;
