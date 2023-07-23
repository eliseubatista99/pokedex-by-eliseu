import { Typography } from "@components";
import { User } from "firebase/auth";
import { BaseModal, BaseModalProps } from "../_baseModal";

export interface ModalLoginAgainProps extends BaseModalProps {
  currentUser: User | null;
}

export const ModalLoginAgain = ({
  isVisible,
  currentUser,
}: ModalLoginAgainProps) => {
  return (
    <BaseModal isVisible={isVisible}>
      <Typography
        styles={{ color: "#4d4d4d", fontSize: "26px", fontWeight: 400 }}
      >
        {"We need to confirm your identity"}
      </Typography>
      <Typography styles={{ fontSize: "26px", fontWeight: 600 }}>
        {"Please enter your password do proceed"}
      </Typography>
    </BaseModal>
  );
};
