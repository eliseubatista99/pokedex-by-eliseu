import { ScreenPaths } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import { FirebaseAppHelper } from "@eliseubatista99/react-scaffold-firebase";
import { css, Global } from "@emotion/react";
import {
  Account,
  Favorites,
  ForgotPassword,
  HomeScreen,
  ItemDetails,
  Items,
  Login,
  LoginData,
  LoginDone,
  LoginOrRegister,
  Onboarding1,
  Onboarding2,
  PokemonDetails,
  Pokemons,
  Register,
  RegisterData,
  RegisterDone,
  UpdateEmail,
  UpdateName,
  UpdatePassword,
} from "@screens";
import { firebaseConfig } from "./configs";
import { PokedexFirebaseAuthProvider } from "./contexts";

FirebaseAppHelper.initializeApp(firebaseConfig);

export interface AppProvidersProps {
  children?: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
          }

          html {
            width: 100%;
            height: 100%;
            display: flex;
            font-family: "Poppins", sans-serif;
            overflow: initial;
            overflow-x: hidden;
            overflow-y: auto;
          }

          body {
            width: 100%;
            height: 100%;
            display: flex;
            background: #ededed;
            flex-direction: column;
            margin: auto;
          }

          #app {
            zoom: 1;
          }

          #root {
            width: 100%;
            min-height: 100%;
          }

          div {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }

          p {
            color: inherit;
            font-size: 16px;
            font-style: normal;
            line-height: normal;
            font-family: Poppins;
            width: fit-content;
            height: fit-content;
          }
        `}
      />
      <FeedbackProvider>
        <PokedexFirebaseAuthProvider>
          <NavigationProvider
            routes={[
              {
                path: ScreenPaths.splash,
                render: <HomeScreen />,
              },
              {
                path: ScreenPaths.onboarding1,
                render: <Onboarding1 />,
              },
              {
                path: ScreenPaths.onboarding2,
                render: <Onboarding2 />,
              },
              {
                path: ScreenPaths.loginOrRegister,
                render: <LoginOrRegister />,
              },
              {
                path: ScreenPaths.register,
                render: <Register />,
              },
              {
                path: ScreenPaths.registerData,
                render: <RegisterData />,
              },
              {
                path: ScreenPaths.registerDone,
                render: <RegisterDone />,
              },
              {
                path: ScreenPaths.login,
                render: <Login />,
              },
              {
                path: ScreenPaths.loginData,
                render: <LoginData />,
              },
              {
                path: ScreenPaths.loginDone,
                render: <LoginDone />,
              },
              {
                path: ScreenPaths.forgotPassword,
                render: <ForgotPassword />,
              },
              {
                path: ScreenPaths.pokemons,
                render: <Pokemons />,
              },
              {
                path: ScreenPaths.pokemonDetails,
                render: <PokemonDetails />,
              },
              {
                path: ScreenPaths.items,
                render: <Items />,
              },
              {
                path: ScreenPaths.itemDetails,
                render: <ItemDetails />,
              },
              {
                path: ScreenPaths.favorites,
                render: <Favorites />,
              },
              {
                path: ScreenPaths.account,
                render: <Account />,
              },
              {
                path: ScreenPaths.updateEmail,
                render: <UpdateEmail />,
              },
              {
                path: ScreenPaths.updateName,
                render: <UpdateName />,
              },
              {
                path: ScreenPaths.updatePassword,
                render: <UpdatePassword />,
              },
            ]}
          >
            {children}
          </NavigationProvider>
        </PokedexFirebaseAuthProvider>
      </FeedbackProvider>
    </>
  );
};
