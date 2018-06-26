import * as React from "react"
import { MarkdownRemark, MarkdownRemarkConnection, Site, ImageSharp } from "../graphql-types";
import { Image, Container, Segment, Item, Header, Grid } from "semantic-ui-react";
import { BlogTags } from "../components/BlogTags";
import BlogTitle from "../components/BlogTitle";
import { RecentBlogPost } from "../components/RecentPost";

/**
 * A template for blog or review post
 */
interface BlogPostData {
  data: {
    post: MarkdownRemark;
    recents: MarkdownRemarkConnection;
    site: Site
  };
}

export default (props: BlogPostData) => {
  const { frontmatter, html, timeToRead } = props.data.post;

  let avatar: ImageSharp;
  if (frontmatter &&
    frontmatter.author &&
    frontmatter.author.avatar &&
    frontmatter.author.avatar.children) {
    avatar = frontmatter.author.avatar.children[0] as ImageSharp;
  }

  let tags: JSX.Element | null;

  if (props &&
    props.data &&
    props.data.post &&
    props.data.post.frontmatter &&
    props.data.post.frontmatter.tags) {

    const t: string[] = [];
    props!.data!.post!.frontmatter!.tags!.forEach(el => {
      if (el)
        t.push(el);
    });
    tags = <BlogTags tags={t} />
  }else{
    tags = null;
  }

  let cover: JSX.Element | null;
  if (frontmatter &&
    frontmatter.feature_image &&
    frontmatter.feature_image.childImageSharp) {
    cover = <Image
      {...frontmatter.feature_image.childImageSharp}
      fluid
    />
  } else {
    cover = null;
  }


  return (
    <Container>
      <BlogTitle />
      <Segment vertical style={{ border: "none" }}>
        <Item.Group>
          <Item>
              {/* <Item.Image size="tiny" shape="circular"
              src={avatar!.responsiveResolution!.src}
              srcSet={avatar!.responsiveResolution!.srcSet}
            /> */}
            <Item.Content>
              <Item.Description>{frontmatter!.author!.name}</Item.Description>
              <Item.Meta>{frontmatter!.author!.bio}</Item.Meta>
              <Item.Extra>{frontmatter!.updatedDate} - {timeToRead} min read</Item.Extra>
            </Item.Content> 
          </Item>
        </Item.Group>
        <Header as="h1">{frontmatter!.title}</Header>
      </Segment>

      {cover}

      <Segment vertical
        style={{ border: "none" }}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
      <Segment vertical>
        {tags}
      </Segment>
      {/* {props.data.site
        && props.data.site.siteMetadata
        && props.data.site.siteMetadata.disqus
        && <Segment vertical>
          <ReactDisqusComments shortname={props.data.site.siteMetadata.disqusShortname} /> 
        </Segment>
      } */}
      <Segment vertical>
        <Grid padded centered>
          {RecentBlogPost}
        </Grid>
      </Segment>
    </Container>
  );
};

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    site: dataJson {
      siteTitle
      disqusShortname
    }
    recents: allMarkdownRemark(filter: {fields: {slug: {ne: $slug}}, frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/blog/"}}, sort: {order: DESC, fields: [frontmatter___updatedDate]}, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            feature_image {
              children {
                ... on ImageSharp {
                  resolutions(width: 900, height: 300, quality: 100) {
                    src
                    srcSet
                  }
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    resolutions(width: 900, height: 300, quality: 100) {
                      src
                      srcSet
                    }
                  }
                }
              }
              twitter
              github
            }
          }
        }
      }
    }
    post: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        tags
        categories
        draft
        createdDate(formatString: "MMM D, YYYY")
        updatedDate(formatString: "MMM D, YYYY")
        author {
          id
          name
          bio
          avatar {
            children {
              ... on ImageSharp {
                resolutions(width: 900, height: 300, quality: 100) {
                  src
                  srcSet
                }
              }
            }
          }
          twitter
          github
        }
        feature_image {
          children {
            ... on ImageSharp {
              resolutions(width: 900, height: 300, quality: 100) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
  
`;