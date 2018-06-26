import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";


const blogHeader = () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          Blog
            <Header.Subheader>
            Change me
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};

export default blogHeader