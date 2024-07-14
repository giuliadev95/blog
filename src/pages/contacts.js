import * as React from 'react';
import Layout from '../components/layout';

const ContactPage = () => {
    return (
        <Layout pageTitle="Contatti">
            <h2>Contatti</h2>
            <ul>
                <li>Instagram</li>
                <li>X</li>
            </ul>
        </Layout>
    );
};

export const Head = () => <title>Contact Page</title>;
export default ContactPage;
