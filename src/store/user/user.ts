import { User } from "firebase/auth";
import produce from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface UserState {
  lastUpdateTime?: number;
  firebaseUser?: User | null;
  favorites?: number[];
}

export const initialUserState: UserState = { firebaseUser: undefined };

interface UseUserStoreOutput extends UserState {
  setFirebaseUser: (data: User | null | undefined) => void;
  setUserFavorites: (data: number[]) => void;
}

export const useUserStore = StoreHelper.createStore<UseUserStoreOutput>(
  (set) => ({
    ...initialUserState,
    setFirebaseUser: function (data: User | null | undefined) {
      set(
        produce((state: UserState) => {
          //console.log("UPDATING USER: ", data);
          return { ...state, firebaseUser: data };
        }),
        false,
        "setFirebaseUser"
      );
    },
    setUserFavorites: function (data: number[]) {
      set(
        produce((state: UserState) => {
          const currentTime = Date.now();
          return { ...state, favorites: data, lastUpdateTime: currentTime };
        }),
        false,
        "setUserFavorites"
      );
    },
  }),
  "User",
  createJSONStorage(() => localStorage)
);
