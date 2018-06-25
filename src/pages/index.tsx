
import * as React from "react";
import { SiteConfig } from "../declarations";
import Helmet from "react-helmet";
import GoogleVerification from "../components/GoogleVerification";

const config: SiteConfig = require("../../data/siteConfig.json");

export default class HomePage extends React.Component {
    render() {
        return (<span>
            <Helmet>
                <title>{config.siteTitle}</title>
                <link rel="canonical" href={`${config.siteUrl}`} />
                <GoogleVerification/>
            </Helmet>
            <div>
                <h1>Hi home page</h1>
            </div>
        </span>)
    }
}