function HandleImgs ({ProjectImages}) {
    return(
        <>
        <a href="https://github.com/lAngittoto/matcha.git" target="_blank" rel="noopener noreferrer"><img src={ProjectImages.Image} alt="Project Images" className="w-[250px] h-[150px]"/></a>
        <h1 className="font-mono">{ProjectImages.Title}</h1>
        </>
    );
};
export default HandleImgs;