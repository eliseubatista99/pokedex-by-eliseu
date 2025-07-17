import React from "react";

import { FirebaseAuthProvider } from "@eliseubatista99/react-scaffold-firebase";
import { ModalLoginAgain } from "../../modals";
import { useBaseStore } from "../../store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const REQUIRES_RECENT_LOGIN_ERROR = "auth/requires-recent-login";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FirebaseAuthInputProps extends React.PropsWithChildren {}

type FirebaseContextOutputProps = object;

const PokedexFirebaseAuth = React.createContext<FirebaseContextOutputProps>({});

export const PokedexFirebaseAuthProvider = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
}: FirebaseAuthInputProps) => {
  const storeBase = useBaseStore();

  return (
    <PokedexFirebaseAuth.Provider value={{}}>
      <FirebaseAuthProvider>
        <>
          {storeBase.loginAgainModal && (
            <ModalLoginAgain {...storeBase.loginAgainModal} />
          )}
          {children}
        </>
      </FirebaseAuthProvider>
    </PokedexFirebaseAuth.Provider>
  );
};
