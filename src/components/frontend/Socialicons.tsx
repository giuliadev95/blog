import { FaInstagram } from 'react-icons/fa6'; ///// header branch: Installed react-icons
import { FaMedium } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import Link from 'next/link';

export default function SocialIcons() {
    return (
        <ul className="hidden lg:flex items-center space-x-6">
            <li className="size-4">
                <Link
                href={"https://medium.com/@giuliamoukouyou"}
                rel="noopener noreferrer"
                target="_blank"
                >
                <FaMedium className="text-white"/>
                </Link>
            </li>
            <li className="size-4">
                <Link
                href={"https://x.com/Gamete14"}
                rel="noopener noreferrer"
                target="_blank"
                >
                <FaSquareXTwitter className="text-white"/>
                </Link>
            </li>
            <li className="size-4">
                <Link
                href={"https://www.instagram.com/tutorlife.official/"}
                rel="noopener noreferrer"
                target="_blank"
                >
                    <FaInstagram className="text-white"/>
                </Link>
            </li>
        </ul>
    )
}
