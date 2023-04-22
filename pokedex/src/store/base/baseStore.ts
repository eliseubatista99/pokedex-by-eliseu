import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface BaseState {
  loader?: {
    style: "transparent" | "opaque";
    text?: string;
  };
}

export const initialBaseState: BaseState = {
  loader: undefined,
};

interface UseBaseStoreOutput extends BaseState {
  setPartialState: (data: Partial<BaseState>) => void;
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialBaseState,
    setPartialState: function (data: Partial<BaseState>) {
      set(
        produce((state: BaseState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "Base",
  createJSONStorage(() => localStorage)
);
