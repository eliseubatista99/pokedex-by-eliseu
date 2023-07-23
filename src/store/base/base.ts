import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface LoadingState {
  isLoading: boolean;
  loadingText?: string;
  style?: "transparent" | "opaque";
}

export interface ToastState {
  duration?: number;
  icon?: React.ReactNode;
  text: string;
}

export interface BaseState {
  loading?: LoadingState;
  toast?: ToastState;
}

const initialState: BaseState = {};

interface UseBaseStoreOutput extends BaseState {
  showLoader: (value: Omit<LoadingState, "isLoading">) => void;
  hideLoader: () => void;
  setToastData: (data: ToastState | undefined) => void;
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
          loading: undefined,
        })),
        false,
        "hideLoader"
      );
    },
    setToastData: function (data: ToastState | undefined) {
      set(
        produce((state: BaseState) => ({
          ...state,
          toast: data,
        })),
        false,
        "setToastData"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
