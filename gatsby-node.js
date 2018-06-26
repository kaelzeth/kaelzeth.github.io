const urlFriendly = require("./utilities");
const path = require('path');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let slug;
  if (node.internal.type === "MarkdownRemark") {
    if (node.hasOwnProperty("frontmatter")) {
      slug = node.frontmatter.slug || node.frontmatter.title;
      slug = `/${urlFriendly(slug)}`;
    }
    if (!slug) {
      const fileNode = getNode(node.parent);
      const parsedFilePath = path.parse(fileNode.relativePath);

      if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.dir === "") {
        slug = `/${parsedFilePath.name}/`;
      } else {
        slug = `/${parsedFilePath.dir}/`;
      }
    }


    createNodeField({ node, name: "slug", value: slug });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {

    const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");

    resolve(
      graphql(
        `
      {
        posts: allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
                categories
                draft
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          return reject(result.errors);
        }
        const posts = result.data.posts.edges.map(p => p.node);

        // // Create blog pages
        posts
          .forEach(post => {
            if (post.frontmatter.draft === false) {
              createPage({
                path: post.fields.slug,
                component: blogPostTemplate,
                context: {
                  slug: post.fields.slug
                }
              });
            }
          });

        // // Create tags pages
        // posts
        //   .reduce((mem, post) =>
        //     cleanArray(mem.concat(get(post, 'frontmatter.tags')))
        //     , [])
        //   .forEach(tag => {
        //     createPage({
        //       path: `/blog/tags/${kebabCase(tag)}/`,
        //       component: slash(templates.tagsPage),
        //       context: {
        //         tag
        //       }
        //     });
        //   });

        // // Create blog pagination
        // const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE);
        // times(pageCount, index => {
        //   createPage({
        //     path: `/blog/page/${index + 1}/`,
        //     component: slash(templates.blogPage),
        //     context: {
        //       skip: index * POSTS_PER_PAGE
        //     }
        //   });
        // });
      }));
  });
};
