import Image from "next/image";

export default function Logo() {
    return (
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
    )
}