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
            </main>
        </Layout>
    )
}

export const Head = () => <title> Homepage</title>
export default IndexPage
