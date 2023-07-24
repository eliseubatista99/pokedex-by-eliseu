import React from "react";
import { BaseDrawerProps } from "./baseDrawer";

export const useBaseDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const isDragging = React.useRef<boolean>(false);
  const drawerParentRef = React.useRef<HTMLDivElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLDivElement>(null);
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
    if (!drawerParentRef || !drawerRef || !handleRef) {
      return;
    }

    if (isDragging.current) {
      //TODO: multiply by zoom
      //Height of the screen
      const screenHeight = window.innerHeight;
      //Y position of the pointer
      const pointerHeight = e.clientY;
      //Height of the drawer
      const drawerHeight = drawerRef.current?.clientHeight || 0;
      //*adding of the drawer
      const drawerPadding = 24;
      //Height of the handle
      const handleHeight = drawerHeight - drawerPadding / 2;
      //Bottom value where the drawer should close
      const closeBottomValue = drawerHeight - drawerPadding - 10;

      const distanceFromPointerToBottom = screenHeight - pointerHeight;
      let targetBottom = distanceFromPointerToBottom - handleHeight;

      if (targetBottom > 0) {
        targetBottom = 0;
      }

      setDrawerBottomDistance(targetBottom);

      if (targetBottom <= -closeBottomValue) {
        onCloseDrawer();
        handleOnPointerUp(e);
      }
    }
  };

  return {
    drawerParentRef,
    drawerRef,
    drawerBottomDistance,
    handleRef,
    onDragStart: handleonClick,
    onDrag: handleOnPointerMove,
    onDragEnd: handleOnPointerUp,
  };
};
