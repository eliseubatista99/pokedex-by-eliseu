import React from "react";

export interface UseScrollInput {
  scrollElem: React.RefObject<HTMLDivElement | null>;
  listElem: React.RefObject<HTMLDivElement | null>;
  onTouchBottom: () => void;
}

export const useScroll = (input: UseScrollInput) => {
  const isTouchingBottom = React.useRef<boolean>(false);

  const onScroll = React.useCallback(() => {
    const scroll = input.listElem.current?.scrollHeight || 0;
    const height = input.scrollElem.current?.clientHeight || 0;
    const scrollTop = input.scrollElem.current?.scrollTop || 0;
    const scrollHeight = scroll - height;

    const distanceToBottom = scrollHeight - scrollTop;

    if (distanceToBottom < 10) {
      if (!isTouchingBottom.current) {
        isTouchingBottom.current = true;
        input.onTouchBottom();
      }
    } else {
      isTouchingBottom.current = false;
    }
  }, [input]);

  React.useEffect(() => {
    input.scrollElem.current?.addEventListener("scroll", () => onScroll());

    return () => {
      input.scrollElem.current?.removeEventListener("scroll", () => onScroll());
    };
  }, [input.scrollElem, onScroll]);
};
