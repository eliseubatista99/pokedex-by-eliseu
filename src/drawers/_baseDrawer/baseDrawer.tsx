import { DRAWER_PADDING } from "@constants";
import React, { type CSSProperties } from "react";
import { useBaseDrawerHelper } from "./baseDrawer.hook";

export interface BaseDrawerProps {
  isVisible: boolean;
  children?: React.ReactNode;
  styles?: CSSProperties;
  onCloseDrawer: (data?: any) => void;
}

export const BaseDrawer = (props: BaseDrawerProps) => {
  const { isVisible, children, styles } = props;
  const {
    drawerParentRef,
    drawerRef,
    handleRef,
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
              padding: `${DRAWER_PADDING}px`,
              zIndex: 1001,
              position: "absolute",
              bottom: `${drawerBottomDistance}px`,
              ...styles,
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              ref={handleRef}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "0px",
                height: "24px",
                width: "100%",
                cursor: "pointer",
              }}
              onPointerDown={onDragStart}
            >
              <div
                style={{
                  width: "28.5px",
                  height: "2.25px",
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
