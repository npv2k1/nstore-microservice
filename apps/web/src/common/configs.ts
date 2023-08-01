export const APP_SOCKET_URL = "ws://localhost:4001";
export const APP_API_URL =
  process.env.NEXT_PUBLIC_AUTH_API || "http://localhost:4005/api";
export const APP_GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_AUTH_GRAPHQL_ENDPOINT ||
  "http://localhost:4005/graphql";
export const APP_GRAPHQL_WS =
  process.env.NEXT_PUBLIC_AUTH_GRAPHQL_WS || "ws://localhost:4005/graphql";
