import * as React from "react";
import { MarkdownRemark, ImageSharp } from "../graphql-types";
import { Card, Comment } from "semantic-ui-react";
import Link from "gatsby-link";

interface Prop {
    data: MarkdownRemark
}

export class RecentBlogPost extends React.Component<Prop, {}>{

    render() {
        const data: MarkdownRemark = this.props.data;

        const recentAvatar: ImageSharp = data!.frontmatter!.author!.avatar!.childImageSharp!;


        let recentCover: ImageSharp;
        if (data.frontmatter &&
            data.frontmatter.feature_image &&
            data.frontmatter.feature_image.childImageSharp) {
            recentCover = data.frontmatter.feature_image.childImageSharp;
        }

        const extra = (
            <Comment.Group>
                <Comment>
                    <Comment.Avatar
                        src={recentAvatar!.responsiveResolution!.src || ""}
                        srcSet={recentAvatar!.responsiveResolution!.srcSet}
                    />
                    <Comment.Content>
                        <Comment.Author style={{ fontWeight: 400 }}>
                            {data.frontmatter!.author!.name}
                        </Comment.Author>
                        <Comment.Metadata style={{ margin: 0 }}>
                            {data.timeToRead} min read
                </Comment.Metadata>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        );

        return (
            <div key={data.fields!.slug!} style={{ paddingBottom: "1em" }}>
                <Card as={Link}
                    to={data.fields!.slug}
                    image={recentCover!}
                    header={data.frontmatter!.title}
                    extra={extra}
                />
            </div>
        );
    }
}
