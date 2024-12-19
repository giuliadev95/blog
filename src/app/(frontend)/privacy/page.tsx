export default function Termini() {
    return(
        <div className="flex flex-col justify-center items-start py-20 px-6 max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen self-center">
            Privacy Policy
            </h2>

            {/** Ultimo aggiornamento */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-8 border-b border-zinc-700">
                Ultimo aggiornamento: 19/12/2024
                <br/>
                <br/>
                La tua privacy è importante per noi. 
                Questa pagina descrive come gestiamo i tuoi dati durante 
                la navigazione sul nostro sito.
            </p>

            {/* 1. Raccolta dei dati personali */}
            <ul className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    1. Raccolta dei dati personali
                </h3>
                <li>
                Tutor Life non raccoglie dati personali dei visitatori.
                <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                    <li>
                        Non utilizziamo moduli di contatto o email per interazioni dirette.
                    </li>
                    <li>
                        Non raccogliamo informazioni personali né salviamo dati relativi ai visitatori.
                    </li>
                </ul>
                </li>
            </ul>

            {/* 2. Cookie e strumenti di analisi */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                2. Cookie e strumenti di analisi
                </h3>
                Il nostro sito non utilizza cookie o strumenti di tracciamento come Google Analytics. 
                La tua navigazione su Tutor Life è completamente anonima e non monitoriamo alcuna attività o comportamento online.
            </p>

            {/* 3. Link a siti esterni */}
            <ul className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    3. Link a siti esterni
                </h3>
                Tutor Life potrebbe contenere collegamenti a siti web esterni. 
                Non siamo responsabili per il contenuto o le politiche di privacy di tali siti. 
                Ti consigliamo di consultare le loro informative sulla privacy prima di fornire 
                eventuali dati personali.
            </ul>

            {/* 4. Modifiche alla Privacy Policy */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    4. Modifiche alla Privacy Policy
                </h3>
                Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. 
                Eventuali modifiche saranno pubblicate su questa pagina e avranno effetto 
                immediato dalla data di pubblicazione.
            </p>

            {/* 5. Contatti */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                5. Contatti
                </h3>
                Non offriamo moduli o indirizzi email per contattarci. Se desideri ulteriori 
                informazioni, ti invitiamo a seguire gli aggiornamenti del 
                blog per eventuali comunicazioni future.
            </p>

            {/* Modifiche ai Termini e Condizioni */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                Navigando su Tutor Life, confermi di aver compreso e accettato 
                i termini di questa Privacy Policy. Grazie per aver visitato 
                il nostro blog.
            </p>
        </div>
    )
}

