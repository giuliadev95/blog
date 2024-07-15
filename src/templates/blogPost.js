import React from 'react';
import DOMPurify from 'dompurify';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  const SanitizedText = DOMPurify.sanitize(post.html);

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: SanitizedText }} />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPost;
