exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions;
  
    if (node.internal.type === 'MarkdownRemark') {
      const slug = `/blog/${node.frontmatter.title.replace(/\s+/g, '-').toLowerCase()}`;
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
    }
  };
  
  exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogPostTemplate = require.resolve('./src/templates/blogPost.js');
  
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `);
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });
  };
  