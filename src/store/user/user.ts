import { StoreHelper } from "@eliseubatista99/react-scaffold-store";
import { type User } from "firebase/auth";
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";

export interface UserState {
  lastUpdateTime?: number;
  firebaseUser?: User | null;
  favorites?: string[];
}

export const initialUserState: UserState = { firebaseUser: undefined };

interface UseUserStoreOutput extends UserState {
  setFirebaseUser: (data: User | null | undefined) => void;
  setUserFavorites: (data: string[]) => void;
}

export const useUserStore = StoreHelper.createStore<UseUserStoreOutput>(
  (set) => ({
    ...initialUserState,
    setFirebaseUser: function (data: User | null | undefined) {
      set(
        produce((state: UserState) => {
          return { ...state, firebaseUser: data };
        }),
        false,
        "setFirebaseUser"
      );
    },
    setUserFavorites: function (data: string[]) {
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
