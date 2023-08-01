import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { Client, Provider as GraphqlProvider } from "urql";

import {
  cacheExchange,
  createClient,
  dedupExchange,
  fetchExchange,
  ssrExchange,
} from "@urql/core";
import { createClient as createWSClient } from "graphql-ws";
import { getToken } from "src/common/getToken";
import { subscriptionExchange } from "urql";
import { APP_GRAPHQL_ENDPOINT, APP_GRAPHQL_WS } from "src/common/configs";
import SocketProvider from "./socket/socket";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

// import wsClient from './wsClient'
const wsClient = isServerSide
  ? null
  : createWSClient({
      url: APP_GRAPHQL_WS,
      connectionParams: () => {
        const token = getToken();
        if (token) {
          return {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        } else
          return {
            headers: {},
          };
      },
    });

const graphqlClient = createClient({
  url: APP_GRAPHQL_ENDPOINT,
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
    // @ts-ignore
    subscriptionExchange({
      forwardSubscription: (operation) => ({
        // @ts-ignore
        subscribe: (sink: any) => ({
          unsubscribe: wsClient?.subscribe(operation, sink),
        }),
      }),
    }),
  ],
  // @ts-ignore
  fetchOptions: () => {
    const token = getToken();
    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else
      return {
        headers: {},
      };
  },
});

export interface ApiProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const ApiProvider = ({ children }: ApiProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GraphqlProvider value={graphqlClient as Client}>
        {/* <SocketProvider>{children}</SocketProvider> */}
        {children}
      </GraphqlProvider>
    </QueryClientProvider>
  );
};
export default ApiProvider;
