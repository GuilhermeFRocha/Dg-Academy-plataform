import { ApolloClient, InMemoryCache } from "@apollo/client";

 export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o4ii2t0gxn01xr94862i6d/master',
    cache: new InMemoryCache()
 })