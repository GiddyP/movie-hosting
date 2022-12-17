import { logo } from "../assets";


const Navbar = () => {

  return (
    <nav className="bg-primary w-[100vw] md:w-[w100vw] lg:w-[1440px] md:h-[140px] h-[65px] top-0 flex ds:block justify-center items-center">
      <img className="ds:py-[40px] ds:pl-[77px] md:pl-[0px] xs:w-[108px] xs:h-[33.58px] md:w-[193px] md:h-[60px] ds:w-fit ds:h-fit" src={logo} alt="logo-img" />
    </nav >
  );
};

export default Navbar;