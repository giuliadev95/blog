// Hero section 
// import ButtonRed from "@/components/ButtonRed";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return(
        <>
             {/* Container with the image on the background, the gray thin layer above, and and the caption on the top */}
            <div className="relative w-screen h-[442px] lg:h-[482px]">
                <Image  className="relative -z-10"
                    src="/hero-img.jpg" 
                    alt="A student studying on the Ipad" 
                    layout="fill" 
                    objectFit="cover" 
                    priority 
                />
                {/* <div className="absolute inset-0 z-10 h-full w-full bg-gray-50/5">
                </div> */}

                {/* on branch header create the overlapped caption for tablets and laptops */}
                    <div className="hidden md:flex lg:absolute flex-col w-[70%] absolute z-30 mt-[100px] ml-[10%] gap-[20px]">
                        <div className="text-5xl font-extrabold text-white drop-shadow-xxl">
                            Consigli pratici
                        </div>
                        <div className="text-5xl font-extrabold text-white drop-shadow-2xl pl-[20%] xxl2560:pl-[0%]">
                            e risorse per
                        </div>
                        <div className="text-5xl font-extrabold text-white drop-shadow-2xl pl-[25%] xxl2560:pl-[0%]">
                            insegnare online
                        </div>
                        <Link className="flex justify-center py-4 xxl2560:justify-start"
                        href={"/posts"}> 
                            <button className="block bg-red rounded-[20px] text-white text-base px-4 py-2">
                                Scopri come
                            </button>
                        </Link>
                    </div>
            </div>
            {/* on branch header create the caption just for smartphones */}
            <div className="flex-col md:hidden ml-6 largeMobile426:ml-16 my-6 items-center justify-center md:h-screen">
                <div className="text-4xl   font-extrabold text-lightMintGreen text-left">
                    Consigli pratici
                </div>
                <div className="text-4xl font-extrabold text-white text-center largeMobile426:text-center ml-18">
                    e risorse per
                </div>
                <div className="text-4xl font-extrabold text-lightMintGreen text-left">
                    insegnare online
                </div>
            </div>
            <div className="relative  h-[100px] w-full bg-darkGrey flex items-center justify-between "> 
                <div className="absolute inset-0 z-20 h-full w-full bg-gray-50/5">
                </div>  
                <p className="absolute inset-0 z-40 h-full w-full flex items-center justify-center flex-wrap text-white text-base md:text-lg font-normal md:text-center">
                    <span>
                    Trova 
                    <span className="text-lightMintGreen mx-1">
                        studenti, 
                    </span>
                     costruisci relazioni di 
                    <span className="text-lightMintGreen mx-1">
                        fiducia,
                    </span>
                    </span>
                    <span className="-mt-8 mobile568:-mt-0">
                        organizza lezioni efficaci e di 
                        <span className="text-lightMintGreen ml-1">
                        valore.
                        </span>
                    </span>
                </p>
            </div>
            {/* On branch header: create the Link that wraps the Red Button for the Call-to-action */}
            <Link className="flex justify-center py-4 md:hidden"
            href={"/posts"}> 
                <button className="block bg-red rounded-[20px] text-white text-base px-4 py-2">
                    Scopri come
                </button>
            </Link>
        </>
    )
}