import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface UserState {
  email?: string | null;
  name?: string | null;
}

export const initialUserState: UserState = { name: null, email: null };

interface UseUserStoreOutput extends UserState {
  setPartialState: (data: Partial<UserState>) => void;
}

export const useUserStore = StoreHelper.createStore<UseUserStoreOutput>(
  (set) => ({
    ...initialUserState,
    setPartialState: function (data: Partial<UserState>) {
      set(
        produce((state: UserState) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "User",
  createJSONStorage(() => localStorage)
);
