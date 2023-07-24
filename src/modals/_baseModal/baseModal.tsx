import React from "react";

export interface BaseModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClickOutsideModal: () => void;
}

export const BaseModal = ({
  isVisible,
  children,
  onClickOutsideModal,
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
          onClick={() => {
            onClickOutsideModal();
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "375px",
              height: "fit-content",
              maxHeight: "50%",
              background: "#ffffff",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              zIndex: 1001,
              position: "relative",
            }}
            onClick={(e) => {
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
