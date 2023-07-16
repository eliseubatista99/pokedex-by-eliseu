import React from "react";

export const useToggle = (initialState?: boolean) => {
  const [state, setState] = React.useState<boolean>(initialState || false);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  return {
    state,
    toggle,
  };
};
