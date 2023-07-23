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
  showLoader: (value: Omit<LoadingState, "isLoading">) => void;
  hideLoader: () => void;
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    showLoader: function (value: Omit<LoadingState, "isLoading">) {
      set(
        produce((state: BaseState) => ({
          ...state,
          loading: {
            ...state.loading,
            isLoading: true,
            ...value,
          },
        })),
        false,
        "showLoader"
      );
    },
    hideLoader: function () {
      set(
        produce((state: BaseState) => ({
          ...state,
          loading: {
            ...state.loading,
            isLoading: false,
            loadingText: undefined,
            style: "transparent",
          },
        })),
        false,
        "hideLoader"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
