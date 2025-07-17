import { useBaseStore } from "@store";
import React from "react";
import { type ToastProps } from "./toast";

export const useToastHelper = ({ duration }: ToastProps) => {
  const hideStarted = React.useRef<boolean>(false);
  const { setToastData } = useBaseStore();

  const hideToastInSeconds = React.useCallback(async () => {
    if (hideStarted.current) {
      return;
    }
    hideStarted.current = true;

    await new Promise((res) => setTimeout(res, duration * 1000));

    setToastData(undefined);
  }, [duration, setToastData]);

  React.useEffect(() => {
    hideToastInSeconds();
  }, [hideToastInSeconds]);
};
