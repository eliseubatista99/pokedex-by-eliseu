import React from "react";

export interface BaseModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onPointerDownOutsideModal: () => void;
}

export const BaseModal = ({
  isVisible,
  children,
  onPointerDownOutsideModal,
}: BaseModalProps) => {
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
          onPointerDown={() => {
            onPointerDownOutsideModal();
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
            onPointerDown={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};