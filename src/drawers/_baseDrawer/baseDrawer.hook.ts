import { APP_SCALE } from "@constants";
import React from "react";
import { type BaseDrawerProps } from "./baseDrawer";

export const useBaseDrawerHelper = ({ onCloseDrawer }: BaseDrawerProps) => {
  const isDragging = React.useRef<boolean>(false);
  const drawerParentRef = React.useRef<HTMLDivElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const handleRef = React.useRef<HTMLDivElement>(null);
  const [drawerBottomDistance, setDrawerBottomDistance] =
    React.useState<number>(0);

  const dragStartPointerPosition = React.useRef<number>(undefined);

  const handleOnClick = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    //Y position of the pointer
    const pointerHeight = e.clientY;
    dragStartPointerPosition.current = pointerHeight;
  };

  const handleOnPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    dragStartPointerPosition.current = undefined;
    setDrawerBottomDistance(0);
  };

  const handleOnPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drawerParentRef || !drawerRef || !handleRef) {
      return;
    }

    if (isDragging.current && dragStartPointerPosition.current !== undefined) {
      //Y position of the pointer
      const pointerHeight = e.clientY;
      //Height of the drawer
      const drawerHeight = drawerRef.current?.clientHeight || 0;

      //Distance between the position where the dragged started and the current posititon
      let distanceTraveledByPointer =
        dragStartPointerPosition.current - pointerHeight;

      //The previous result is negative, so reverse it. Also, divide it by the app scale to avoid offsets
      distanceTraveledByPointer = -distanceTraveledByPointer / APP_SCALE;

      //Set the drawer bottom distance. In case the pointer moved up, cap it to zero
      setDrawerBottomDistance(
        distanceTraveledByPointer < 0 ? 0 : -distanceTraveledByPointer
      );

      if (distanceTraveledByPointer >= drawerHeight - 15) {
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
    onDragStart: handleOnClick,
    onDrag: handleOnPointerMove,
    onDragEnd: handleOnPointerUp,
  };
};
