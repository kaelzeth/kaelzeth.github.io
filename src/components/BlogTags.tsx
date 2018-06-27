import Link from "gatsby-link";
import * as React from "react";
import { Label } from "semantic-ui-react";

import { urlFriendly } from "../utilities";

interface Prop {
  tags: string[];
}
export class BlogTags extends React.Component<Prop, {}>{
  render() {
    const { tags } = this.props;

    return (
      <div>
        {tags.map((tag: string) => {
          const slug = urlFriendly(tag);
          return <Label key={tag}><Link to={`/blog/tags/${slug}/`}>{tag}</Link></Label>;
        })}
      </div>
    );
  }
}