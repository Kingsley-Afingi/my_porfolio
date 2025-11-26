import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="flex justify-between items-center  px-4 py-3 bg-gray-950">
        <a
          href="#"
          className="text-2xl text-white tracking-wider flex items-center"
          id="home"
        >
          KNGs.CODE
        </a>
        <div className=" font-mono text-white space-x-4">
          <div className=" ssm:hidden md:block lg:block space-x-3">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          {toggle ? (
            <div
              className="ssm:block md:hidden lg:hidden"
              onClick={handleClose}
            >
              <LiaTimesSolid size={30} />
            </div>
          ) : (
            <div className="ssm:block md:hidden lg:hidden" onClick={handleOpen}>
              <FaBarsStaggered size={30} />
            </div>
          )}
        </div>
      </div>

      {toggle && (
        <div className="ml-2 text-white font-mono absolute">
          <ul className="flex flex-col space-y-1">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#testimonials">Testimonials</a>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
