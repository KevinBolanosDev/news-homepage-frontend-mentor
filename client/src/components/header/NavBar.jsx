import menuOpen from "/icon-menu.svg";
import menuClose from "/icon-menu-close.svg";
import { useState } from "react";

function NavBar() {
  const [ isMenuOpen, setMenuOpen ] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div>
    <button className={`me-4 sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
        <img src={menuOpen} alt="Open Menu" />
      </button>
        <ul className={`fixed top-0 right-0 h-full bg-black bg-opacity-50 w-full text-lg sm:space-y-0 sm:relative sm:flex sm:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white text-neutral-veryDarkBlue font-medium h-full ps-6 py-6 space-y-5 ml-auto w-[260px] sm:py-0 sm:space-y-0 sm:w-auto sm:flex sm:gap-8 sm:text-neutral-darkGrayishBlue">
        <button className={`ml-auto mb-16 me-4 sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}>
        <img src={menuClose} alt="Close Menu" />
        </button>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Home</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>New</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>popular</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Trending</a>
            </li>
            <li>
              <a className="hover:text-primary-softRed" href='#' onClick={toggleMenu}>Categories</a>
            </li>
        </div>
        </ul>
    </div>
    </>
  )
}

export default NavBar