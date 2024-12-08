import Link from "next/link";

export default function DesktopMenu() {
    return (
        // Desktop Nav Menu
        <ul className="hidden lg:flex items-center space-x-6 ">                          
                            <li>
                                <Link href="/" className="text-white opacity-70 text-base font-bold" >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-white opacity-70 text-base font-bold">
                                    Chi sono
                                </Link>
                            </li>
                            <li>
                                <Link href="/posts" className="text-white opacity-70 text-base font-bold" >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-white opacity-70 text-base font-bold" >
                                    Contatti
                                </Link>
                            </li>  
        </ul>
    )
}
