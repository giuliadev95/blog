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


    return (
        // General Navbar with Desktop Menu / Mobile Menu
            <nav className="">
                {/* General  Navbar container */}
                <div className="mx-auto w-full h-16 text-xl py-0 px-8 mb-0 border-0 shadow-none flex justify-between items-center  bg-lightCream">
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
                {isMenuOpen? ( 
                           
                            <ul className=" flex flex-col lg:hidden justify-start items-center space-y-6 my-12 h-screen">                          
                                <li>
                                    <Link href="/" className="text-white opacity-70 text-2xl font-normal py-6"
                                    onClick={closeMenu} >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#chi-sono" className="text-white opacity-70 text-2xl font-normal py-6"
                                    onClick={closeMenu} >
                                        Chi sono
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/posts" className="text-white opacity-70 text-2xl font-normal py-6"
                                    onClick={closeMenu} >
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#contatti" className="text-white opacity-70 text-2xl font-normal py-6" 
                                    onClick={closeMenu} >
                                        Contatti
                                    </Link>
                                </li>
                                {/** Social Icons */}
                                <ul className="flex items-center justify-between space-x-8 py-6">
                                    <li className="size-4">
                                        <Link
                                        href={"https://www.instagram.com/tutorlife.official/"}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                        <FaInstagramSquare className="text-white text-3xl"/>
                                        </Link>
                                    </li>
                                    <li className="size-4">
                                        <Link
                                            href={"https://x.com/Gamete14"}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            >
                                            <FaSquareXTwitter className="text-white text-3xl"/>
                                        </Link>
                                    </li>
                                    <li className="size-4">
                                        <Link
                                            href={"https://medium.com/@giuliamoukouyou"}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <FaMedium className="text-white text-3xl"/>
                                        </Link>
                                    </li>
                                </ul>       
                            </ul>                    
                ) : null
                }
            </nav> 
    )
}