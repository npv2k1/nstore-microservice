import { ColumnsType } from "antd/lib/table";
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
} from "react";
import { User } from "@/services/graphql/codegen";
import { makeTableColumn } from "./makeTableColumn";

export function checkSidebarOpen() {
  // const token = Cookies.get("AUTH_TOKEN");
  // if (!token) return false;
  // return true;
}

// STATE
export interface IAppState {
  isOpenSidebar: boolean;
  tableColumns?: ColumnsType<User>;
  selectedRecord?: User;
  showCreateModal: boolean;
  showUpdateModal: boolean;
}

const appStateDefault: IAppState = {
  isOpenSidebar: true,
  showCreateModal: false,
  showUpdateModal: false,
};

// Action
export enum UserPageActionType {
  TOGGLE_SIDEBAR,
  SELECT_RECORD,
  SET_TABLE_COLUMNS,
}

export interface IAppAction {
  type: UserPageActionType;
  payload: Partial<IAppState>;
}

export const reducer = (state: IAppState, action: IAppAction): IAppState => {
  switch (action.type) {
    case UserPageActionType.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isOpenSidebar: state.isOpenSidebar,
      };
    }
    case UserPageActionType.SELECT_RECORD: {
      return {
        ...state,
        selectedRecord: action.payload.selectedRecord,
      };
    }
    case UserPageActionType.SET_TABLE_COLUMNS: {
      return {
        ...state,
        tableColumns: action.payload.tableColumns,
      };
    }

    default:
      return state;
  }
};

// Context
interface IAppContextDefault {
  state: IAppState;
  dispatch: Dispatch<{ type: UserPageActionType; payload: Partial<IAppState> }>;
}

export const UserPageCtx = createContext<IAppContextDefault>({
  state: appStateDefault,
  dispatch: () => null,
});

interface Props {
  children: ReactNode;
}

const UserPageProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, appStateDefault);

  const hanldeEditRecord = useCallback(() => {
    console.log("hanldeEditRecord");
  }, [state.selectedRecord]);

  const handleRemoveRecord = useCallback(() => {}, [state.selectedRecord]);

  useEffect(() => {
    dispatch({
      type: UserPageActionType.SET_TABLE_COLUMNS,
      payload: {
        tableColumns: makeTableColumn(),
      },
    });
  }, [dispatch, hanldeEditRecord, handleRemoveRecord]);

  return (
    <UserPageCtx.Provider value={{ state, dispatch }}>
      {children}
    </UserPageCtx.Provider>
  );
};

export default UserPageProvider;
