// Import the Raeact library
// Is the modern JavaScript ES6 module syntax
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout pageTitle = "Home">
            <main>
            <h2>
                Il blog per insegnanti online
            </h2>
            <p>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. 
            Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando 
            un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. 
            È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione.
            </p>
            <h2>
                Argomenti
            </h2>
            <h2>
                Contatti
            </h2>
            </main>
        </Layout>
    )
}

export const Head = () => <title> Homepage</title>
export default IndexPage
