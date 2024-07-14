import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return(
        <Layout pageTitle = "Chi sono">
            <h2>
                Chi sono
            </h2>
            <p>
                Ciao, mi chiamo Giulia, ho 28 anni e sono un tutor online di greco, latino e materie umanistiche per un’azienda che offre lezioni private. 

                Faccio questo lavoro da tre anni come libero professionista e ho creato questo blog per condividere con chi voglia intraprendere la stessa carriera ciò che ho appreso lavorando come insegnante da remoto.

                Parlo di metodo di insegnamento per scuole medie, superiori e università, di postazione di lavoro e accessori, software utili e finanza personale.
            </p>
        </Layout>
    )
}

export const Head = () => <title>Aboutpage</title>
export default AboutPage
