import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
       // Link that wraps a div containing the Logo, made by: 1) The pen image, 2) The website name "Tuot life".
        <Link href={"/"}>
            <div className="flex">
                <Image className="rounded-full overflow-hidden"
                src="/logo-pen.png"
                alt="Computer"
                width= {32}
                height={32}
                priority    
                /> 
                <span className="text-white font-extrabold text-2xl">
                    Tutor life
                </span>
            </div>       
        </Link>
    )
}