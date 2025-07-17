import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../store.helper";

export interface HistoryState {
  history: string[];
}

const initialState: HistoryState = {
  history: [],
};

interface UseHistoryStoreOutput extends HistoryState {
  replaceHistory: (newHistory: string[]) => void;
  addToHistory: (entry: string) => void;
  popFromHistory: (count: number) => void;
}

export const useHistoryStore = StoreHelper.createStore<UseHistoryStoreOutput>(
  (set) => ({
    ...initialState,
    addToHistory: function (entry: string) {
      set(
        produce((state: HistoryState) => ({
          ...state,
          history: [...state.history, entry],
        })),
        false,
        "addToHistory"
      );
    },
    popFromHistory: function (count: number) {
      set(
        produce((state: HistoryState) => ({
          ...state,
          history: state.history.slice(0, state.history.length - count),
        })),
        false,
        "popFromHistory"
      );
    },
    replaceHistory: function (newHistory: string[]) {
      set(
        produce((state: HistoryState) => ({
          ...state,
          history: newHistory,
        })),
        false,
        "replaceHistory"
      );
    },
  }),
  "Base",
  createJSONStorage(() => sessionStorage)
);
