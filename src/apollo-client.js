import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://more-humpback-64.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'fKi0nurlxnGVsbsnf0euWWzTQYB5RfS5ksEOEwjY5BSqi5mXTxq9kNlGliFIniBK'
    },
});
  
export default client;