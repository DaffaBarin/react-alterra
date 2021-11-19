import { ApolloClient, InMemoryCache } from '@apollo/client';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
    uri: 'https://kampusmerdekaalterra.hasura.app/v1/graphql',
    headers: {
        "x-hasura-admin-secret":
        '2cV50Y2i1jDNVt3vtEcJQTfL0M5M9ckz06C3c7PGl4C5i7sUEJYNAgsMJlkWaRs7',
    },
});
const wsLink = new WebSocketLink({
    uri: 'ws://kampusmerdekaalterra.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams: {
			headers: {
                "x-hasura-admin-secret":
                '2cV50Y2i1jDNVt3vtEcJQTfL0M5M9ckz06C3c7PGl4C5i7sUEJYNAgsMJlkWaRs7',
            },
		},
    },
});

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
});

export default client;