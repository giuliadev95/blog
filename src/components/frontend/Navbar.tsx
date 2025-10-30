import DesktopMenu from "./DesktopMenu";
import Link from "next/link";
import Logo from "./Logo";
import { FaInstagramSquare } from "react-icons/fa"; ///// header branch: Installed react-icons
import { FaMedium } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import Socialicons from "./Socialicons";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = ()=> {
        setIsMenuOpen(!isMenuOpen) // !false = true;
    }

    ///// on brach header, try to fix the mobile menu not desappearing on link click
    const closeMenu = () => {
        setIsMenuOpen(false);
      };

    ///// on brach header, try to have the mobile menu avoid the scrolling
      useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        // Cleanup on unmount
        return () => document.body.classList.remove("no-scroll");
    }, [isMenuOpen]);

    // close menu on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);


    return (
        // Navbar with Desktop Menu / Mobile Menu
            <nav className="">
                {/*  Navbar container */}
                <div className="relative z-50 mx-auto w-full h-16 text-xl py-0 px-8 mb-0 border-0 shadow-none flex justify-between items-center bg-lightCream">
                    {/* Logo just for smarthpnes and tablets */}    
                    <Logo/>  
                    {/* Hamburger Icon to Toggle Mobile Menu */}
                    <div className="lg:hidden flex items-center">
                        <button 
                            className="focus:outline-none" 
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            >
                                <div className={`w-6 h-6 flex flex-col justify-center items-center gap-1.5 transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`}>
                                    <span
                                        className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-90 translate-y-2" : ""}`}
                                    ></span>
                                    <span
                                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                                    ></span>
                                    <span
                                        className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "-backdrop-hue-rotate-90 -translate-y-2" : ""}`}
                                    ></span>
                                </div>
                        </button>
                    </div>
                    {/* Desktop Menu */}
                    <DesktopMenu/>
                    { /* Desktop Menu : Social icons */}
                    <Socialicons/>
                </div>
                {/* Bottom: Mobile Menu */}
                {isMenuOpen ? (
                    <nav
                      className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm flex items-center justify-center"
                      aria-modal="true"
                      role="dialog"
                      onClick={closeMenu}
                    >
                      <ul className="flex flex-col items-center space-y-4" onClick={(e) => e.stopPropagation()}>
                         <li>
                           <Link
                             href="/"
                             className="block text-white opacity-90 text-2xl font-normal py-4 px-6 w-full text-center"
                             onClick={closeMenu}
                           >
                             Home
                           </Link>
                         </li>
                         <li>
                           <Link
                             href="/#chi-sono"
                             className="block text-white opacity-90 text-2xl font-normal py-4 px-6 w-full text-center"
                             onClick={closeMenu}
                           >
                             Chi sono
                           </Link>
                         </li>
                         <li>
                           <Link
                             href="/posts"
                             className="block text-white opacity-90 text-2xl font-normal py-4 px-6 w-full text-center"
                             onClick={closeMenu}
                           >
                             Blog
                           </Link>
                         </li>
                         <li>
                           <Link
                             href="/#contatti"
                             className="block text-white opacity-90 text-2xl font-normal py-4 px-6 w-full text-center"
                             onClick={closeMenu}
                           >
                             Contatti
                           </Link>
                         </li>

                        {/* Social Icons */}
                        <li className="pt-4">
                          <ul className="flex items-center justify-center space-x-6">
                            <li>
                              <Link
                                href={"https://www.instagram.com/tutorlife.official/"}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white text-3xl"
                              >
                                <FaInstagramSquare />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"https://x.com/Gamete14"}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white text-3xl"
                              >
                                <FaSquareXTwitter />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={"https://medium.com/@giuliamoukouyou"}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white text-3xl"
                              >
                                <FaMedium />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                ) : null}
            </nav> 
    )
}