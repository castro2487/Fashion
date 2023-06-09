import {
  createContext,
  useReducer,
  useContext,
  PropsWithChildren,
} from 'react';

type TUIState = {
  example: boolean;
};

type TUIActions = {
  toggleExample: () => void;
};

enum TUIActionType {
  TOGGLE_EXAMPLE = 'TOGGLE_EXAMPLE',
}

type TUIPayload = {
  someData: 'someData';
};

type TUIAction = {
  type: TUIActionType;
  payload?: TUIPayload;
};

export type TUIContext = {
  UIState: TUIState;
  UIActions: TUIActions;
};

const initialUIState: TUIState = {
  example: false,
};

const UIContext = createContext<TUIContext>({
  UIState: initialUIState,
  UIActions: {} as TUIActions,
});

function UIReducer(state: TUIState, action: TUIAction): TUIState {
  if (action.type === TUIActionType.TOGGLE_EXAMPLE) {
    return {
      ...state,
      example: !state.example,
    };
  }

  return state;
}

export const UIWrapper = ({ children }: PropsWithChildren) => {
  const [UIState, dispatch] = useReducer(UIReducer, initialUIState);

  const UIActions = {
    toggleExample: () => dispatch({ type: TUIActionType.TOGGLE_EXAMPLE }),
  };

  return (
    <UIContext.Provider value={{ UIState, UIActions }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUIContext = () => {
  return useContext(UIContext);
};
