declare const graphql: (query: TemplateStringsArray) => void;
declare const __PATH_PREFIX__: string;

declare module "react-disqus-comments" {
    export class ReactDisqusComments extends React.Component<{
        shortname: string,
        identifier: string,
        title: string,
        url: string
        category_id: string
    }, {}> { }
}

export interface SiteConfig {
    siteTitle: string, // Site title.
    siteTitleAlt: string, // Alternative site title for SEO.
    siteLogo: string, // Logo used for SEO and manifest.
    siteUrl: string, // Domain of your website without pathPrefix.
    pathPrefix: string, // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    fixedFooter: boolean, // Whether the footer component is fixed, i.e. always visible
    siteDescription: string, // Website description used for RSS feeds/meta description tag.
    siteRss: string, // Path to the RSS file.
    siteFBAppID: string, // FB Application ID for using app insights
    siteGATrackingID: string, // Tracking code ID for google analytics.
    siteGoogleVerification : string,
    disqusShortname: string, // Disqus shortname.
    postDefaultCategoryID: string, // Default category for posts.
    copyright: string
}