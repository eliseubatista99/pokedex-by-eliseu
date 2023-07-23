import { User } from "firebase/auth";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface UserState {
  firebaseUser?: User | null;
}

export const initialUserState: UserState = { firebaseUser: undefined };

interface UseUserStoreOutput extends UserState {
  setFirebaseUser: (data: User | null | undefined) => void;
}

export const useUserStore = StoreHelper.createStore<UseUserStoreOutput>(
  (set) => ({
    ...initialUserState,
    setFirebaseUser: function (data: User | null | undefined) {
      set(
        produce((state: UserState) => {
          console.log("UPDATING USER: ", data);
          return { ...state, firebaseUser: data };
        }),
        false,
        "setFirebaseUser"
      );
    },
  }),
  "User",
  createJSONStorage(() => localStorage)
);
