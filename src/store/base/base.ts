import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
  style?: "transparent" | "opaque";
}

export interface BaseState {
  loading: LoadingState;
}

const initialState: BaseState = {
  loading: {
    isLoading: false,
  },
};

interface UseBaseStoreOutput extends BaseState {
  setLoading: (value: LoadingState) => void;
  //TODO: Create remove favorite
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    setLoading: function (value: LoadingState) {
      set(
        produce((state: BaseState) => ({
          ...state,
          loading: {
            ...state.loading,
            ...value,
          },
        })),
        false,
        "setLoading"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
