import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-start gap-8 border-t border-t-lightGrey pt-20 max-w-[1200px] mx-auto">
            <Logo/>
            <div className="flex flex-col md:flex-row md:gap-24">
                <div className="text-center md:text-left">
                    <h3 className="font-semibold text-lg text-white">Sito web</h3>  
                    <ul className="font-normal text-lightGrey text-base flex flex-col gap-2 mt-2">
                        <li>Home</li>
                        <li>Chi sono</li>
                        <li>Blog</li>
                        <li>Contatti</li>      
                    </ul>
                </div>

                <div className="text-center md:text-left mt-8 md:mt-0">
                    <h3 className="font-semibold text-lg text-white">Legale</h3>
                    <ul className="font-normal text-lightGrey text-base flex flex-col gap-2 mt-2">
                        <Link 
                            href={"/termini-condizioni/"}>
                            <li>Termini e condizioni</li>
                        </Link>
                        <Link
                        href={"/privacy/"}>
                            <li>Privacy Policy</li>
                        </Link>
                    </ul>
                </div>

                <div className="text-center md:text-left mt-8 md:mt-0">
                    <h3 className="font-semibold text-lg text-white">Contatti</h3>
                    <ul className="font-normal text-lightGrey text-base flex flex-col gap-2 mt-2">
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Medium</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-t-lightGrey/10 pt-6 pb-4 flex flex-col gap-4 items-center justify-center">
                <p className="attribution text-center font-normal text-lightGrey text-sm">
                    All images designed by 
                    <Link 
                        href={'http://www.freepik.com/'}
                        target="_blank"
                        rel="noopener noreferrer">
                        {` `} Freepik.
                    </Link>
                </p>

                <p className="text-center font-normal text-lightGrey text-sm">
                    © 2024 
                    <Link 
                        href={'https://giuliadev.netlify.app/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {` `} Giulia Moukouyou. All rights reserved.
                    </Link>
                </p>
            </div>
        </div>
    )
}