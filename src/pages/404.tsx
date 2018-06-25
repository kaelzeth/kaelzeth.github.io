import * as React from "react";
import { SiteConfig } from "../declarations";
import Helmet from "react-helmet";

const config: SiteConfig = require("../../data/siteConfig.json");

export default class Page404 extends React.Component {
    render() {
        return (<span>
            <Helmet>
                <title>{config.siteTitle}</title>
                <link rel="canonical" href={`${config.siteUrl}`} />
            </Helmet>
            <div>
                    <h1>You are here!</h1>
                    <h2>But nothing found for you #404</h2>
                </div>
        </span>)
    }
}