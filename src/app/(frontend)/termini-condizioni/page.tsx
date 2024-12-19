export default function Termini() {
    return(
        <div className="flex flex-col justify-center items-start py-20 px-6 max-w-[1200px] mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-lightMintGreen self-center">
            Termini e condizioni
            </h2>

            {/** Ultimo aggiornamento */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-8 border-b border-zinc-700">
                Ultimo aggiornamento: 19/12/2024
                <br/>
                <br/>
                Benvenuti su Tutor Life! Questa pagina descrive i termini e le condizioni che regolano 
                l’utilizzo del nostro sito web. Si prega di leggere attentamente quanto segue prima 
                di navigare o utilizzare i contenuti presenti su Tutor Life.
            </p>

            {/* 1. Proprietà dei contenuti */}
            <ul className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    1. Proprietà dei contenuti
                </h3>
                <li>
                Tutti gli articoli, testi, immagini e contenuti pubblicati su Tutor Life 
                sono di proprietà esclusiva dell’autrice, Giulia Moukouyou, 
                salvo diversa indicazione.
                <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                    <li>I contenuti sono originali e creati con l’obiettivo di fornire informazioni 
                        e consigli sull’insegnamento online.
                    </li>
                    <li>Non è consentito copiare, riprodurre, distribuire o modificare i 
                        contenuti senza un’autorizzazione scritta.
                    </li>
                </ul>
                </li>
            </ul>

            {/* 2. Accesso al sito */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    2. Accesso al sito
                </h3>
                L&apos;accesso al sito Tutor Life è libero e non richiede registrazione. 
                Gli utenti possono leggere gli articoli gratuitamente e senza alcuna forma di autenticazione.
            </p>

            {/* 3. Utilizzo dei contenuti */}
            <ul className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    3. Utilizzo dei contenuti
                </h3>
                <li>
                Tutti gli articoli, testi, immagini e contenuti pubblicati su Tutor Life 
                sono di proprietà esclusiva dell’autrice, Giulia Moukouyou, salvo diversa indicazione.
                <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                    <li>L&apos;utente è libero di trarre ispirazione dai contenuti, 
                        ma è tenuto a rispettare la proprietà intellettuale del sito.
                    </li>
                    <li>L&apos;autrice non è responsabile per eventuali errori, omissioni o 
                        risultati derivanti dall’uso delle informazioni fornite.
                    </li>
                </ul>
                <h4 className="text-white font-bold text-xl lg:2xl py-8">
                    Immagini
                </h4>
                Le immagini utilizzate sul sito sono progettate da Freepik e includono 
                la necessaria attribuzione nel footer del sito: &quot;Images designed by Freepik&quot;.
                <br/>
                Gli utenti non possono riutilizzare o ridistribuire le immagini 
                senza rispettare i termini di licenza di Freepik.
                </li>
            </ul>

            {/* 4. Esclusione di responsabilità */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    4. Esclusione di responsabilità
                </h3>
                <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                    <li>Gli articoli pubblicati su Tutor Life rappresentano l&apos;opinione personale 
                        dell’autrice e non costituiscono consulenza professionale.
                    </li>
                    <li>
                        L&apos;autrice non garantisce che i contenuti siano sempre aggiornati, 
                        accurati o privi di errori.
                    </li>
                    <li>
                        L&apos;utilizzo delle informazioni è a rischio esclusivo dell&apos;utente.
                    </li>
                </ul>
            </p>

            {/* 5. Collegamenti a siti esterni */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    5. Collegamenti a siti esterni
                </h3>
                <li>
                Tutor Life potrebbe contenere collegamenti a siti web di terze parti.
                    <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                        <li>
                            Non abbiamo alcun controllo sui contenuti di tali siti e non possiamo garantirne l&apos;affidabilità, 
                            l’accuratezza o la sicurezza.
                        </li>
                        <li>
                            L&apos;utente è invitato a verificare i termini e le condizioni dei siti esterni visitati.
                        </li>     
                    </ul>
                </li>
            </p>

            {/* 6. Modifiche ai Termini e Condizioni */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                    6. Modifiche ai Termini e Condizioni
                </h3>
                <li>
                Tutor Life si riserva il diritto di aggiornare o modificare i presenti Termini 
                e Condizioni in qualsiasi momento senza preavviso.
                    <ul className="max-w-[1000px] list-disc pl-8 pt-4">
                        <li>
                        Le modifiche entreranno in vigore al momento della loro pubblicazione su questa pagina.
                        </li>
                        <li>
                        Si consiglia agli utenti di controllare periodicamente questa sezione.
                        </li>     
                    </ul>
                </li>
            </p>
            
            {/* 7. Contatti */}
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 border-b border-zinc-700">
                <h3 className="text-white font-bold text-2xl lg:3xl pb-4">
                8. Contatti
                </h3>
                L&apos;accesso al sito Tutor Life è libero e non richiede registrazione. 
                Gli utenti possono leggere gli articoli gratuitamente e senza alcuna forma di autenticazione.
            </p>
            <p className="text-lightGrey max-w-[1200px] text-lg py-12 list-none border-b border-zinc-700">
                Navigando su Tutor Life, accetti implicitamente i Termini e Condizioni sopra riportati. 
                Grazie per aver visitato il nostro blog.
            </p>
        </div>
    )
}

