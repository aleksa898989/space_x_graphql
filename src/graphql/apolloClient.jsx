import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://api.spacex.land/graphql`,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
