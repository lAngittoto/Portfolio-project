const Header = () => {
  const listStyle = "hover:scale-110 transition-transform duration-100 ";
  return (
    <header className="bg-[#CAE8BD] h-[100px] flex  justify-center">
      <nav className=" flex items-center ">
        <ul className=" text-2xl flex flex-row w-[600px] justify-between font-light cursor-pointer ">
          <li className={listStyle}>Home</li>
          <li className={listStyle}>About</li>
          <li className={listStyle}>Project</li>
          <li className={listStyle}>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
