

// import React from "react";
// import ReactDisqusComments from "react-disqus-comments";
// import { MarkdownRemark, Site } from "../graphql-types";

// interface Prop {
//   post: MarkdownRemark;
//   site: Site
// }

// export class Disqus extends React.Component<Prop, {}> {

//   render() {
//     const  {siteMetadata}  = this.props.site;
//     if (!siteMetadata.disqusShortname) {
//       return null;
//     }
//     const post = this.props.post;
//     const f = post.frontmatter;

//     const url = siteMetadata.siteUrl + post.fields!.slug;
//     return (
//       <ReactDisqusComments
//         shortname={siteMetadata!.disqusShortname}
//         identifier={f!.title}
//         title={f!.title}
//         url={url}
//       />
//     );
//   }
// }
