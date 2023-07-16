import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface BaseState {
  isLoading: boolean;
}

const initialState: BaseState = {
  isLoading: false,
};

interface UseBaseStoreOutput extends BaseState {
  setIsLoading: (value: boolean) => void;
  //TODO: Create remove favorite
}

export const useBaseStore = StoreHelper.createStore<UseBaseStoreOutput>(
  (set) => ({
    ...initialState,
    setIsLoading: function (value: boolean) {
      set(
        produce((state: BaseState) => ({
          ...state,
          isLoading: value,
        })),
        false,
        "setIsLoading"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
