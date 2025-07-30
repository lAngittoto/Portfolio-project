import { Link } from "react-router-dom";
const Header = () => {
  const listStyle = "hover:scale-110 transition-transform duration-100 ";
  return (
    <header className="bg-[#CAE8BD] h-[180px] sm:h-[100px] flex  justify-center  overflow-hidden ">
      <nav className="  flex items-center  ">
        <ul className=" text-2xl flex flex-col w-[600px]  items-center font-light cursor-pointer sm:flex-row sm:justify-between gap-2  ">
          <Link to="/" className={listStyle}>
            Home
          </Link>
          <Link to="/about" className={listStyle}>
            About
          </Link>
          <Link to="/project" className={listStyle}>Project</Link>
          <Link to="/contact" className={listStyle}>Contact</Link>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
