// This is the Contact component, for the "Contatti" section of the Homepage.
// import React Icons
import { FaInstagram } from 'react-icons/fa6'; ///// header branch: Installed react-icons
// import { FaLinkedinIn } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
// Import components
import Link from "next/link";


export default function Contact() {
    return(
        <div className="flex flex-col justify-center items-center py-20 px-6 max-w-[1500px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen" id="contatti">
                Contatti
            </h2>

            {/* Social links for contact */}
            <div className=" flex flex-col md:flex-row items-center mt-8">
                <ul className="flex items-center space-x-6 lg:gap-4">
                    <li className="size-4">
                        <Link
                        href={"#"}
                        >
                            <FaMedium className="text-white text-3xl"/>
                        </Link>
                    </li>
                    {/* <li className="size-4">
                        <Link
                        href={"#"}
                        >
                            <FaLinkedinIn className="text-white text-3xl"/>
                        </Link>
                    </li> */}
                    <li className="size-4">
                        <Link
                        href={"#"}
                        >
                            <FaSquareXTwitter className="text-white text-3xl"/>
                        </Link>
                    </li>
                    <li className="size-4">
                        <Link
                        href={"#"}
                        >
                            <FaInstagram className="text-white text-3xl"/>
                        </Link>
                    </li>
                </ul>
               
            </div>
        </div>
    )
}