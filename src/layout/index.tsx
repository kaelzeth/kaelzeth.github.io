import * as React from "react";
import Helmet from "react-helmet";
import { SiteConfig } from "../declarations";

const config: SiteConfig = require("../../data/siteConfig.json");


class Layout extends React.Component {

  render() {
    return (
      <main>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {this.props.children}
      </main>
    );
  }
}

export default Layout;