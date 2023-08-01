import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

import { io, Socket } from "socket.io-client";
import { APP_SOCKET_URL } from "src/common/configs";

// Context

interface IAppContextDefault {
  socket: Socket;
  isConnected: boolean;
}

const DefautSocketState: IAppContextDefault = {
  socket: io(`${APP_SOCKET_URL}`, {
    reconnectionDelayMax: 10000,
    transports: ["websocket"],
    extraHeaders: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  }),
  isConnected: false,
};

export const SocketCtx = createContext<IAppContextDefault>(DefautSocketState);

interface Props {
  children: ReactNode;
}

const SocketProvider = ({ children }: Props) => {
  const socket = useMemo(() => {
    return io(`${APP_SOCKET_URL}`, {
      reconnectionDelayMax: 10000,
      transports: ["websocket"],
      extraHeaders: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
  }, []);
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [socket]);
  return (
    <SocketCtx.Provider
      value={{
        socket: socket,
        isConnected: isConnected,
      }}
    >
      {children}
    </SocketCtx.Provider>
  );
};

export function useSocket() {
  const { socket, isConnected } = useContext(SocketCtx);
  return { socket, isConnected };
}

export default SocketProvider;
