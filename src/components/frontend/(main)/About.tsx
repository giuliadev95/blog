// This is the about component, for the "Chi sono" section of the Homepage.
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return(
        <div className="flex flex-col justify-center items-center py-20 px-6 max-w-[1500px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen" id="chi-sono">Chi sono</h2>
            <div className=" flex flex-col md:flex-row-reverse items-center">
                <Image
                src="/about-img.png"
                alt="Una donna scrive al pc"
                width={300}
                height={300}
                />
                <div className="flex flex-col items-center md:items-start gap-8 justify-center max-w-[800px]">
                    <h3 className="font-semibold text-white text-2xl mt-2 md:mt-6">Un blog per insegnanti</h3>
                    <p className="text-lightGrey font-light text-base md:text-lg">
                    Ciao! Mi chiamo Giulia e sono una freelance 🙋‍♀️, in questo blog ti spiego i metodi e le strategie per diventare un insegnante di successo.
                    </p>
                    <p className="text-lightGrey font-light text-base md:text-lg">
                        Con alle spalle una carriera come tutor di materie classiche e umanistiche, online e in presenza, ho fatto tesoro della mia esperienza e ho creato Tutor life, per condividere con te tutte le dritte e i consigli che ritengo importanti, sperando di esserti d&apos;aiuto.</p>
                    <p className="text-lightGrey font-light text-base md:text-lg">Qui trovi articoli su come trovare studenti, come organizzare il tuo materiale didattico, come comunicare in modo efficace e altro ancora!</p>
                    <Link className="flex justify-center"
                    href={"/posts"}> 
                        <button className="block bg-red rounded-[20px] text-white text-base px-4 py-2">
                            Leggi gli articoli
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}