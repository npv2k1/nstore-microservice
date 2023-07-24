import { getToken } from '@/common/getToken';
import { useMeQuery, User } from '@/services/graphql';
import { useRouter } from 'next/router';
import { createContext, Dispatch, ReactNode, useEffect, useReducer, useState } from 'react';

// STATE
export interface IAuthState {
  user?: User | null;
}

const appStateDefault: IAuthState = {
  user: null,
};

// Action
export enum IAuthActionType {
  LOGIN_SUCCESS,
}

export interface IAuthAction {
  type: IAuthActionType;
  payload: Partial<IAuthState>;
}

export const reducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case IAuthActionType.LOGIN_SUCCESS: {
      return {};
    }

    default:
      return state;
  }
};

// Context
interface IAppContextDefault {
  user?: User | null;
  state: IAuthState;
  dispatch: Dispatch<{ type: IAuthActionType; payload: Partial<IAuthState> }>;
}

export const AuthContext = createContext<IAppContextDefault>({
  state: appStateDefault,
  dispatch: () => null,
});

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, appStateDefault);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [{ data: userData, error }] = useMeQuery();
  useEffect(() => {
    if (userData?.me) {
      setUser(userData.me);
    } 
  }, [userData]);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push('/auth/login');
    }
  },[])

  return <AuthContext.Provider value={{ user, state, dispatch }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
