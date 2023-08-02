export const APP_SOCKET_URL = "ws://localhost:4001";
export const APP_API_URL =
  process.env.NEXT_PUBLIC_AUTH_API || "http://localhost:4005/api";
export const /* `APP_GRAPHQL_ENDPOINT` is a constant variable that stores the URL endpoint for making
GraphQL API requests. It is used to specify the location where the GraphQL server is
running and can be customized by setting the `NEXT_PUBLIC_AUTH_GRAPHQL_ENDPOINT`
environment variable. If the environment variable is not set, it defaults to
"http://localhost:4005/graphql". */
APP_GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_AUTH_GRAPHQL_ENDPOINT ||
  "http://localhost:4005/graphql";
export const APP_GRAPHQL_WS =
  process.env.NEXT_PUBLIC_AUTH_GRAPHQL_WS || "ws://localhost:4005/graphql";
