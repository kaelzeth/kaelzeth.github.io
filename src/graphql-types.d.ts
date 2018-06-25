/* tslint:disable */
import { GraphQLResolveInfo } from "graphql";

type Resolver<Result, Args = any> = (
  parent: any,
  args: Args,
  context: any,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;
/** An object with an id, parent, and children */
export interface Node {
  id: string /** The id of the node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null /** Connection to all SitePage nodes */;
  allSitePlugin?: SitePluginConnection | null /** Connection to all SitePlugin nodes */;
  sitePage?: SitePage | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
}
/** A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePageEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (sitePageGroupConnectionConnection | null)[] | null;
}
/** Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /** When paginating, are there more items? */;
}
/** An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** Node of type SitePage */
export interface SitePage extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: internal_4 | null;
}
/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_2 | null;
  nodeAPIs?: (string | null)[] | null;
  pluginFilepath?: string | null;
  packageJson?: packageJson_2 | null;
  internal?: internal_5 | null;
}

export interface pluginOptions_2 {
  path?: string | null;
  pathCheck?: boolean | null;
}

export interface packageJson_2 {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  main?: string | null;
  author?: string | null;
  license?: string | null;
  dependencies?: (dependencies_2 | null)[] | null;
  devDependencies?: (devDependencies_2 | null)[] | null;
  peerDependencies?: (peerDependencies_2 | null)[] | null;
  keywords?: (string | null)[] | null;
}

export interface dependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface devDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface peerDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface internal_5 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface internal_4 {
  type?: string | null;
  contentDigest?: string | null;
  description?: string | null;
  owner?: string | null;
}
/** A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (sitePageGroupConnectionEdge | null)[] | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /** The item at the end of the edge */;
  next?: SitePage | null /** The next edge in the connection */;
  previous?: SitePage | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?: (SitePluginEdge | null)[] | null /** A list of edges. */;
  totalCount?: number | null;
  distinct?: (string | null)[] | null;
  group?: (sitePluginGroupConnectionConnection | null)[] | null;
}
/** An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /** Information to aid in pagination. */;
  edges?:
    | (sitePluginGroupConnectionEdge | null)[]
    | null /** A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/** An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /** The item at the end of the edge */;
  next?: SitePlugin | null /** The next edge in the connection */;
  previous?: SitePlugin | null /** The previous edge in the connection */;
}
/** Node of type Site */
export interface Site extends Node {
  id: string /** The id of this node. */;
  parent?: Node | null /** The parent of this node. */;
  children?: (Node | null)[] | null /** The children of this node. */;
  siteMetadata?: siteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  mapping?: mapping_2 | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: internal_6 | null;
}

export interface siteMetadata_2 {
  siteName?: string | null;
}

export interface mapping_2 {
  MarkdownRemark_frontmatter_author?: string | null;
}

export interface internal_6 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export namespace RootQueryTypeResolvers {
  export interface Resolvers {
    allSitePage?: AllSitePageResolver /** Connection to all SitePage nodes */;
    allSitePlugin?: AllSitePluginResolver /** Connection to all SitePlugin nodes */;
    sitePage?: SitePageResolver;
    sitePlugin?: SitePluginResolver;
    site?: SiteResolver;
  }

  export type AllSitePageResolver = Resolver<
    SitePageConnection | null,
    AllSitePageArgs
  >;
  export interface AllSitePageArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: sitePageConnectionSort | null;
    filter?: filterSitePage | null;
  }

  export type AllSitePluginResolver = Resolver<
    SitePluginConnection | null,
    AllSitePluginArgs
  >;
  export interface AllSitePluginArgs {
    skip?: number | null;
    limit?: number | null;
    sort?: sitePluginConnectionSort | null;
    filter?: filterSitePlugin | null;
  }

  export type SitePageResolver = Resolver<SitePage | null, SitePageArgs>;
  export interface SitePageArgs {
    jsonName?: sitePageJsonNameQueryString | null;
    internalComponentName?: sitePageInternalComponentNameQueryString | null;
    path?: sitePagePathQueryString_2 | null;
    component?: sitePageComponentQueryString | null;
    componentChunkName?: sitePageComponentChunkNameQueryString | null;
    pluginCreator?: sitePagePluginCreatorInputObject | null;
    pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
    componentPath?: sitePageComponentPathQueryString | null;
    id?: sitePageIdQueryString_2 | null;
    internal?: sitePageInternalInputObject_2 | null;
  }

  export type SitePluginResolver = Resolver<SitePlugin | null, SitePluginArgs>;
  export interface SitePluginArgs {
    resolve?: sitePluginResolveQueryString_2 | null;
    id?: sitePluginIdQueryString_2 | null;
    name?: sitePluginNameQueryString_2 | null;
    version?: sitePluginVersionQueryString_2 | null;
    pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
    nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
    pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
    packageJson?: sitePluginPackageJsonInputObject_2 | null;
    internal?: sitePluginInternalInputObject_2 | null;
  }

  export type SiteResolver = Resolver<Site | null, SiteArgs>;
  export interface SiteArgs {
    siteMetadata?: siteSiteMetadataInputObject_2 | null;
    port?: sitePortQueryString_2 | null;
    host?: siteHostQueryString_2 | null;
    mapping?: siteMappingInputObject_2 | null;
    pathPrefix?: sitePathPrefixQueryString_2 | null;
    polyfill?: sitePolyfillQueryBoolean_2 | null;
    buildTime?: siteBuildTimeQueryString_2 | null;
    id?: siteIdQueryString_2 | null;
    internal?: siteInternalInputObject_2 | null;
  }
}
/** A connection to a list of items. */
export namespace SitePageConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(SitePageEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<
    (string | null)[] | null,
    DistinctArgs
  >;
  export interface DistinctArgs {
    field?: sitePageDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (sitePageGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: sitePageGroupEnum | null;
  }
}
/** Information about pagination in a connection. */
export namespace PageInfoResolvers {
  export interface Resolvers {
    hasNextPage?: HasNextPageResolver /** When paginating, are there more items? */;
  }

  export type HasNextPageResolver = Resolver<boolean>;
}
/** An edge in a connection. */
export namespace SitePageEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePage | null>;
  export type NextResolver = Resolver<SitePage | null>;
  export type PreviousResolver = Resolver<SitePage | null>;
}
/** Node of type SitePage */
export namespace SitePageResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    jsonName?: JsonNameResolver;
    internalComponentName?: InternalComponentNameResolver;
    path?: PathResolver;
    component?: ComponentResolver;
    componentChunkName?: ComponentChunkNameResolver;
    pluginCreator?: PluginCreatorResolver;
    pluginCreatorId?: PluginCreatorIdResolver;
    componentPath?: ComponentPathResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type JsonNameResolver = Resolver<string | null>;
  export type InternalComponentNameResolver = Resolver<string | null>;
  export type PathResolver = Resolver<string | null>;
  export type ComponentResolver = Resolver<string | null>;
  export type ComponentChunkNameResolver = Resolver<string | null>;
  export type PluginCreatorResolver = Resolver<SitePlugin | null>;
  export type PluginCreatorIdResolver = Resolver<string | null>;
  export type ComponentPathResolver = Resolver<string | null>;
  export type InternalResolver = Resolver<internal_4 | null>;
}
/** Node of type SitePlugin */
export namespace SitePluginResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    resolve?: ResolveResolver;
    name?: NameResolver;
    version?: VersionResolver;
    pluginOptions?: PluginOptionsResolver;
    nodeAPIs?: NodeAPIsResolver;
    pluginFilepath?: PluginFilepathResolver;
    packageJson?: PackageJsonResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type ResolveResolver = Resolver<string | null>;
  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
  export type PluginOptionsResolver = Resolver<pluginOptions_2 | null>;
  export type NodeAPIsResolver = Resolver<(string | null)[] | null>;
  export type PluginFilepathResolver = Resolver<string | null>;
  export type PackageJsonResolver = Resolver<packageJson_2 | null>;
  export type InternalResolver = Resolver<internal_5 | null>;
}

export namespace pluginOptions_2Resolvers {
  export interface Resolvers {
    path?: PathResolver;
    pathCheck?: PathCheckResolver;
  }

  export type PathResolver = Resolver<string | null>;
  export type PathCheckResolver = Resolver<boolean | null>;
}

export namespace packageJson_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    description?: DescriptionResolver;
    version?: VersionResolver;
    main?: MainResolver;
    author?: AuthorResolver;
    license?: LicenseResolver;
    dependencies?: DependenciesResolver;
    devDependencies?: DevDependenciesResolver;
    peerDependencies?: PeerDependenciesResolver;
    keywords?: KeywordsResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
  export type MainResolver = Resolver<string | null>;
  export type AuthorResolver = Resolver<string | null>;
  export type LicenseResolver = Resolver<string | null>;
  export type DependenciesResolver = Resolver<(dependencies_2 | null)[] | null>;
  export type DevDependenciesResolver = Resolver<
    (devDependencies_2 | null)[] | null
  >;
  export type PeerDependenciesResolver = Resolver<
    (peerDependencies_2 | null)[] | null
  >;
  export type KeywordsResolver = Resolver<(string | null)[] | null>;
}

export namespace dependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace devDependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace peerDependencies_2Resolvers {
  export interface Resolvers {
    name?: NameResolver;
    version?: VersionResolver;
  }

  export type NameResolver = Resolver<string | null>;
  export type VersionResolver = Resolver<string | null>;
}

export namespace internal_5Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}

export namespace internal_4Resolvers {
  export interface Resolvers {
    type?: TypeResolver;
    contentDigest?: ContentDigestResolver;
    description?: DescriptionResolver;
    owner?: OwnerResolver;
  }

  export type TypeResolver = Resolver<string | null>;
  export type ContentDigestResolver = Resolver<string | null>;
  export type DescriptionResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}
/** A connection to a list of items. */
export namespace sitePageGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<
    (sitePageGroupConnectionEdge | null)[] | null
  >;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace sitePageGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePage | null>;
  export type NextResolver = Resolver<SitePage | null>;
  export type PreviousResolver = Resolver<SitePage | null>;
}
/** A connection to a list of items. */
export namespace SitePluginConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    totalCount?: TotalCountResolver;
    distinct?: DistinctResolver;
    group?: GroupResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<(SitePluginEdge | null)[] | null>;
  export type TotalCountResolver = Resolver<number | null>;
  export type DistinctResolver = Resolver<
    (string | null)[] | null,
    DistinctArgs
  >;
  export interface DistinctArgs {
    field?: sitePluginDistinctEnum | null;
  }

  export type GroupResolver = Resolver<
    (sitePluginGroupConnectionConnection | null)[] | null,
    GroupArgs
  >;
  export interface GroupArgs {
    skip?: number | null;
    limit?: number | null;
    field?: sitePluginGroupEnum | null;
  }
}
/** An edge in a connection. */
export namespace SitePluginEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePlugin | null>;
  export type NextResolver = Resolver<SitePlugin | null>;
  export type PreviousResolver = Resolver<SitePlugin | null>;
}
/** A connection to a list of items. */
export namespace sitePluginGroupConnectionConnectionResolvers {
  export interface Resolvers {
    pageInfo?: PageInfoResolver /** Information to aid in pagination. */;
    edges?: EdgesResolver /** A list of edges. */;
    field?: FieldResolver;
    fieldValue?: FieldValueResolver;
    totalCount?: TotalCountResolver;
  }

  export type PageInfoResolver = Resolver<PageInfo>;
  export type EdgesResolver = Resolver<
    (sitePluginGroupConnectionEdge | null)[] | null
  >;
  export type FieldResolver = Resolver<string | null>;
  export type FieldValueResolver = Resolver<string | null>;
  export type TotalCountResolver = Resolver<number | null>;
}
/** An edge in a connection. */
export namespace sitePluginGroupConnectionEdgeResolvers {
  export interface Resolvers {
    node?: NodeResolver /** The item at the end of the edge */;
    next?: NextResolver /** The next edge in the connection */;
    previous?: PreviousResolver /** The previous edge in the connection */;
  }

  export type NodeResolver = Resolver<SitePlugin | null>;
  export type NextResolver = Resolver<SitePlugin | null>;
  export type PreviousResolver = Resolver<SitePlugin | null>;
}
/** Node of type Site */
export namespace SiteResolvers {
  export interface Resolvers {
    id?: IdResolver /** The id of this node. */;
    parent?: ParentResolver /** The parent of this node. */;
    children?: ChildrenResolver /** The children of this node. */;
    siteMetadata?: SiteMetadataResolver;
    port?: PortResolver;
    host?: HostResolver;
    mapping?: MappingResolver;
    pathPrefix?: PathPrefixResolver;
    polyfill?: PolyfillResolver;
    buildTime?: BuildTimeResolver;
    internal?: InternalResolver;
  }

  export type IdResolver = Resolver<string>;
  export type ParentResolver = Resolver<Node | null>;
  export type ChildrenResolver = Resolver<(Node | null)[] | null>;
  export type SiteMetadataResolver = Resolver<siteMetadata_2 | null>;
  export type PortResolver = Resolver<Date | null, PortArgs>;
  export interface PortArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type HostResolver = Resolver<string | null>;
  export type MappingResolver = Resolver<mapping_2 | null>;
  export type PathPrefixResolver = Resolver<string | null>;
  export type PolyfillResolver = Resolver<boolean | null>;
  export type BuildTimeResolver = Resolver<Date | null, BuildTimeArgs>;
  export interface BuildTimeArgs {
    formatString?:
      | string
      | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
    fromNow?:
      | boolean
      | null /** Returns a string generated with Moment.js' fromNow function */;
    difference?:
      | string
      | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
    locale?:
      | string
      | null /** Configures the locale Moment.js will use to format the date. */;
  }

  export type InternalResolver = Resolver<internal_6 | null>;
}

export namespace siteMetadata_2Resolvers {
  export interface Resolvers {
    siteName?: SiteNameResolver;
  }

  export type SiteNameResolver = Resolver<string | null>;
}

export namespace mapping_2Resolvers {
  export interface Resolvers {
    MarkdownRemark_frontmatter_author?: MarkdownRemark_frontmatter_authorResolver;
  }

  export type MarkdownRemark_frontmatter_authorResolver = Resolver<
    string | null
  >;
}

export namespace internal_6Resolvers {
  export interface Resolvers {
    contentDigest?: ContentDigestResolver;
    type?: TypeResolver;
    owner?: OwnerResolver;
  }

  export type ContentDigestResolver = Resolver<string | null>;
  export type TypeResolver = Resolver<string | null>;
  export type OwnerResolver = Resolver<string | null>;
}

export interface sitePageConnectionSort {
  fields: (SitePageConnectionSortByFieldsEnum | null)[];
  order?: sitePageConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSitePage {
  jsonName?: sitePageConnectionJsonNameQueryString | null;
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null;
  path?: sitePageConnectionPathQueryString_2 | null;
  component?: sitePageConnectionComponentQueryString | null;
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null;
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageConnectionComponentPathQueryString | null;
  id?: sitePageConnectionIdQueryString_2 | null;
  internal?: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorIdQueryString | null;
  name?: sitePageConnectionPluginCreatorNameQueryString | null;
  version?: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: sitePageConnectionPluginCreatorParentQueryString | null;
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  author?: sitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject | null)[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject | null)[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | (sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject | null)[]
    | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null;
  description?: sitePageConnectionInternalDescriptionQueryString | null;
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionSort {
  fields: (SitePluginConnectionSortByFieldsEnum | null)[];
  order?: sitePluginConnectionSortOrderValues | null;
}
/** Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null;
  id?: sitePluginConnectionIdQueryString_2 | null;
  name?: sitePluginConnectionNameQueryString_2 | null;
  version?: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null;
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal?: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  pathCheck?: sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonDependenciesInputObject_2 | null)[]
    | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonDevDependenciesInputObject_2 | null)[]
    | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?:
    | (sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 | null)[]
    | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type?: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null;
  id?: sitePagePluginCreatorIdQueryString | null;
  name?: sitePagePluginCreatorNameQueryString | null;
  version?: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
  parent?: sitePagePluginCreatorParentQueryString | null;
  internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  pathCheck?: sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
  author?: sitePagePluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?:
    | (sitePagePluginCreatorPackageJsonDependenciesInputObject | null)[]
    | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?:
    | (sitePagePluginCreatorPackageJsonDevDependenciesInputObject | null)[]
    | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?:
    | (sitePagePluginCreatorPackageJsonPeerDependenciesInputObject | null)[]
    | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: sitePagePluginCreatorInternalTypeQueryString | null;
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null;
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null;
  description?: sitePageInternalDescriptionQueryString | null;
  owner?: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  path?: sitePluginPluginOptionsPathQueryString_2 | null;
  pathCheck?: sitePluginPluginOptionsPathCheckQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null;
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginPackageJsonVersionQueryString_2 | null;
  main?: sitePluginPackageJsonMainQueryString_2 | null;
  author?: sitePluginPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonDevDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: (sitePluginPackageJsonPeerDependenciesInputObject_2 | null)[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: (string | null)[] | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null;
  type?: sitePluginInternalTypeQueryString_2 | null;
  owner?: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  siteName?: siteSiteMetadataSiteNameQueryString_2 | null;
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePortQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteHostQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteMappingInputObject_2 {
  MarkdownRemark_frontmatter_author?: siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 | null;
}

export interface siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null;
  type?: siteInternalTypeQueryString_2 | null;
  owner?: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePageConnectionSort | null;
  filter?: filterSitePage | null;
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePluginConnectionSort | null;
  filter?: filterSitePlugin | null;
}
export interface SitePageRootQueryTypeArgs {
  jsonName?: sitePageJsonNameQueryString | null;
  internalComponentName?: sitePageInternalComponentNameQueryString | null;
  path?: sitePagePathQueryString_2 | null;
  component?: sitePageComponentQueryString | null;
  componentChunkName?: sitePageComponentChunkNameQueryString | null;
  pluginCreator?: sitePagePluginCreatorInputObject | null;
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageComponentPathQueryString | null;
  id?: sitePageIdQueryString_2 | null;
  internal?: sitePageInternalInputObject_2 | null;
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null;
  id?: sitePluginIdQueryString_2 | null;
  name?: sitePluginNameQueryString_2 | null;
  version?: sitePluginVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginPackageJsonInputObject_2 | null;
  internal?: sitePluginInternalInputObject_2 | null;
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null;
  port?: sitePortQueryString_2 | null;
  host?: siteHostQueryString_2 | null;
  mapping?: siteMappingInputObject_2 | null;
  pathPrefix?: sitePathPrefixQueryString_2 | null;
  polyfill?: sitePolyfillQueryBoolean_2 | null;
  buildTime?: siteBuildTimeQueryString_2 | null;
  id?: siteIdQueryString_2 | null;
  internal?: siteInternalInputObject_2 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePluginGroupEnum | null;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?:
    | boolean
    | null /** Returns a string generated with Moment.js' fromNow function */;
  difference?:
    | string
    | null /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?:
    | string
    | null /** Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum sitePageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum sitePageDistinctEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum sitePageGroupEnum {
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum sitePluginConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum sitePluginDistinctEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum sitePluginGroupEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}
