import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import close from '../assets/images/nav-cross.svg';

const Navbar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-black">
          GRAPHY<span className="font-light">AGENCY</span>
        </Link>

        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-none z-50"
        >
          {isOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#CCFF00] focus:outline-none"
          >
            <img src={close} alt="close" className="h-12 w-12" />
          </button>

          <div className="flex flex-col items-start text-4xl font-bold p-6 pt-24">
            <Link to="/" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              HOME
            </Link>
            <Link to="/about" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              ABOUT US
            </Link>
            <Link to="/projects" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              PROJECTS
            </Link>
            <Link to="/services" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              SERVICES
            </Link>
            <Link to="/branding" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              BRANDING
            </Link>
            <Link to="/contact" className="py-4 hover:text-[#CCFF00]" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;