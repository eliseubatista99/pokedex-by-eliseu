import React from "react";
import { useBaseDrawerHelper } from "./baseDrawer.hook";

export interface BaseDrawerProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onCloseDrawer: () => void;
}

export const BaseDrawer = (props: BaseDrawerProps) => {
  const { isVisible, children } = props;
  const {
    drawerParentRef,
    drawerRef,
    drawerBottomDistance,
    onDragStart,
    onDrag,
    onDragEnd,
  } = useBaseDrawerHelper(props);

  return (
    <>
      {isVisible && (
        <div
          ref={drawerParentRef}
          style={{
            width: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            background: "#00000068",
            position: "absolute",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            touchAction: "none",
            overflow: "hidden",
          }}
          onPointerUp={onDragEnd}
          onPointerMoveCapture={onDrag}
        >
          <div
            ref={drawerRef}
            style={{
              width: "100%",
              height: "fit-content",
              maxHeight: "90%",
              background: "#ffffff",
              borderTopLeftRadius: "16px",
              borderTopRightRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              zIndex: 1001,
              position: "absolute",
              bottom: `${drawerBottomDistance}px`,
            }}
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "0px",
                height: "32px",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={onDragStart}
            >
              <div
                style={{
                  width: "38px",
                  height: "3px",
                  background: "#e6e6e6",
                  borderRadius: "27px",
                }}
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
