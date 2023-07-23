import React from "react";

export interface BaseDrawerProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onCloseDrawer: () => void;
}

export const BaseDrawer = ({
  isVisible,
  children,
  onCloseDrawer,
}: BaseDrawerProps) => {
  return (
    <>
      {isVisible && (
        <div
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
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => {
            onCloseDrawer?.();
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "500px",
              height: "fit-content",
              maxHeight: "50%",
              background: "#ffffff",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
              zIndex: 1001,
              position: "relative",
            }}
            onClick={(e) => {
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
              }}
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
