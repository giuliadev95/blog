// Hero section 
import Image from "next/image";

export default function Hero() {
    return(
        <>
            <div className="relative w-screen h-[442px] lg:h-[482px]">
                <Image 
                    src="/hero-img.jpg" 
                    alt="Hero Image" 
                    layout="fill" 
                    objectFit="cover" 
                    priority 
                />
                {/* on branch header create the overlapped writing */}
                    <div className="hidden md:flex lg:absolute flex-col w-[100%] absolute z-1 mt-[100px] ml-[10%] gap-[20px]">
                        <div className="text-5xl font-extrabold text-white drop-shadow-2xl">
                            Consigli pratici
                        </div>
                        <div className="text-5xl font-extrabold text-white drop-shadow-2xl pl-[20%]">
                            e risorse per
                        </div>
                        <div className="text-5xl font-extrabold text-white drop-shadow-2xl pl-[30%]">
                            insegnare online
                        </div>
                    </div>
                
            </div>
            <div className="flex-col md:hidden ml-6 ml426:ml-16 my-6 items-center justify-center h-screen">
                <div className="text-4xl   font-extrabold text-lightMintGreen text-left">
                    Consigli pratici
                </div>
                <div className="text-4xl font-extrabold text-white text-center ml426:text-center ml-24">
                    e risorse per
                </div>
                <div className="text-4xl font-extrabold text-lightMintGreen text-left">
                    insegnare online
                </div>
            </div>
        </>
    )
}