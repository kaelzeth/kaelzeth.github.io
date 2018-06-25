
import { SiteConfig } from "../declarations";
import * as React from "react";

const config: SiteConfig = require("../../data/siteConfig.json");

const GoogleVerification = () => {
    const verification = config.siteGoogleVerification ?
        (<meta
            name="google-site-verification"
        content={config.siteGoogleVerification} />) : null;

    return verification;
}

export default GoogleVerification