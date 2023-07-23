import { User } from "firebase/auth";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface UserState {
  firebaseUser?: User;
}

export const initialUserState: UserState = { firebaseUser: undefined };

interface UseUserStoreOutput extends UserState {
  setPartialState: (data: Partial<UserState>) => void;
}

export const useUserStore = StoreHelper.createStore<UseUserStoreOutput>(
  (set) => ({
    ...initialUserState,
    setPartialState: function (data: Partial<UserState>) {
      set(
        produce((state: UserState) => {
          console.log("UPDATING USER: ", data);
          return { ...state, ...data };
        }),
        false,
        "setPartialState"
      );
    },
  }),
  "User",
  createJSONStorage(() => localStorage)
);
