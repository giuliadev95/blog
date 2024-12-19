import { FaInstagram } from 'react-icons/fa6'; ///// header branch: Installed react-icons
// import { FaLinkedinIn } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import Link from 'next/link';

export default function SocialIcons() {
    return (
        <ul className="hidden lg:flex items-center space-x-6">
            <li className="size-4">
                <Link
                href={"/"}
                >
                    <FaMedium className="text-white"/>
                </Link>
            </li>
            {/* <li className="size-4">
                <Link
                href={"/"}
                >
                    <FaLinkedinIn className="text-white"/>
                </Link>
            </li> */}
            <li className="size-4">
                <Link
                href={"/"}
                >
                    <FaSquareXTwitter className="text-white"/>
                </Link>
            </li>
            <li className="size-4">
                <Link
                href={"/"}
                >
                    <FaInstagram className="text-white"/>
                </Link>
            </li>
        </ul>
    )
}
