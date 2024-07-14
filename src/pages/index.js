// Import the Raeact library
// Is the modern JavaScript ES6 module syntax
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout pageTitle="Home">
            <main>
                <h2>Il blog per insegnanti online</h2>
                <p>
                    Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa.
                </p>

                <h2>In evidenza</h2>
                {posts.slice(0, 2).map(({ node }) => (
                    <article key={node.id}>
                        <h3>{node.frontmatter.title}</h3>
                        <p>{node.excerpt}</p>
                        <a href={node.fields.slug}>Leggi di più</a>
                    </article>
                ))}

                <h2>Argomenti</h2>
                <h2>Seguici sui social</h2>
                <p>Segui Tutor life sui social per altri consigli</p>
            </main>
        </Layout>
    );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Homepage</title>;

export default IndexPage;
