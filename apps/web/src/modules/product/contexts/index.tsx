import { ColumnsType } from 'antd/lib/table';
import { createContext, Dispatch, ReactNode, useCallback, useReducer } from 'react';

// STATE
export interface IProductModuleState {
  isOpenSidebar: boolean;
  tableColumns?: ColumnsType<any>;
  selectedRecord?: any;
  showCreateModal: boolean;
  showUpdateModal: boolean;
  showEditDrawer: boolean;
}

const appStateDefault: IProductModuleState = {
  isOpenSidebar: true,
  showCreateModal: false,
  showUpdateModal: false,
  showEditDrawer: false,
};

// Action
export enum ProductModuleActionType {
  TOGGLE_SIDEBAR,
  SELECT_RECORD,
  SET_TABLE_COLUMNS,
  EDIT_RECORD,
}

export interface IAppAction {
  type: ProductModuleActionType;
  payload: Partial<IProductModuleState>;
}

export const reducer = (state: IProductModuleState, action: IAppAction): IProductModuleState => {
  switch (action.type) {
    case ProductModuleActionType.TOGGLE_SIDEBAR: {
      return {
        ...state,
        isOpenSidebar: state.isOpenSidebar,
      };
    }
    case ProductModuleActionType.SELECT_RECORD: {
      return {
        ...state,
        selectedRecord: action.payload.selectedRecord,
      };
    }
    case ProductModuleActionType.SET_TABLE_COLUMNS: {
      return {
        ...state,
        tableColumns: action.payload.tableColumns,
      };
    }
    case ProductModuleActionType.EDIT_RECORD: {
      return {
        ...state,
        showEditDrawer: true,
        selectedRecord: action.payload.selectedRecord,
      };
    }

    default:
      return state;
  }
};

// Context
interface IAppContextDefault {
  state: IProductModuleState;
  dispatch: Dispatch<{ type: ProductModuleActionType; payload: Partial<IProductModuleState> }>;
}

export const ProductModuleCtx = createContext<IAppContextDefault>({
  state: appStateDefault,
  dispatch: () => null,
});

interface Props {
  children: ReactNode;
}

const ProductModuleProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, appStateDefault);

  const hanldeEditRecord = useCallback(() => {
    console.log('hanldeEditRecord');
  }, [state.selectedRecord]);

  const handleRemoveRecord = useCallback(() => {}, [state.selectedRecord]);

  // useEffect(() => {
  //   dispatch({
  //     type: UserPageActionType.SET_TABLE_COLUMNS,
  //     payload: {
  //       tableColumns: makeTableColumn(),
  //     },
  //   });
  // }, [dispatch, hanldeEditRecord, handleRemoveRecord]);

  return (
    <ProductModuleCtx.Provider value={{ state, dispatch }}>{children}</ProductModuleCtx.Provider>
  );
};

export default ProductModuleProvider;
