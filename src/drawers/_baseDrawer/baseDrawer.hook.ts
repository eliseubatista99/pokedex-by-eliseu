import React from "react";
import { BaseDrawerProps } from "./baseDrawer";

export const useBaseDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const isDragging = React.useRef<boolean>(false);
  const drawerParentRef = React.useRef<HTMLDivElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const [drawerBottomDistance, setDrawerBottomDistance] =
    React.useState<number>(0);

  const handleonClick = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
  };

  const handleOnPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    setDrawerBottomDistance(0);
  };

  const handleOnPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drawerParentRef || !drawerRef) {
      return;
    }

    if (isDragging.current) {
      console.log("DRAG");
      const screenHeight = drawerParentRef.current?.clientHeight || 0;
      const pointerHeight = e.clientY;
      const drawerHeight = drawerRef.current?.clientHeight || 0;
      const drawerPadding = 32;
      const drawerHeightForCalculations = drawerHeight - drawerPadding * 2;

      let pointerOffset = screenHeight - pointerHeight;

      if (pointerOffset < 0) {
        pointerOffset = 0;
      }

      if (pointerOffset > drawerHeightForCalculations) {
        pointerOffset = drawerHeightForCalculations;
      }

      setDrawerBottomDistance(pointerOffset - drawerHeightForCalculations);

      if (pointerOffset <= 0) {
        onCloseDrawer();
        handleOnPointerUp(e);
      }
    }
  };

  return {
    drawerParentRef,
    drawerRef,
    drawerBottomDistance,
    onDragStart: handleonClick,
    onDrag: handleOnPointerMove,
    onDragEnd: handleOnPointerUp,
  };
};
