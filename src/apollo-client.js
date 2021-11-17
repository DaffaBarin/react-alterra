import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://kampusmerdekaalterra.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret' : '2cV50Y2i1jDNVt3vtEcJQTfL0M5M9ckz06C3c7PGl4C5i7sUEJYNAgsMJlkWaRs7'
    },
    cache: new InMemoryCache(),
});

export default client;