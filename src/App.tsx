import React from "react";
import "./App.css";
import BuilderScreen from "sections/builder/builderScreen";
import ThemeProvider from "theme";
import ThemeColorPresets from "components/ThemeColorPresets";
import MotionLazyContainer from "components/animate/MotionLazyContainer";
import { Provider } from "react-redux";
import { store } from "redux/store";
import ViewScreen from "sections/builder/viewScreen";
import { defaultCraftState } from "constants/defaultCraftState";
import {
  createBrowserRouter,
  Link,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { routes } from "routes";


function App() {
 
  return (
    <>
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="google-site-verification"
          content="DxP1nQnpuj280i3lBl7DzMvsoQAezgiMuG7PSYtAL4c"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
      </head>
      <ThemeProvider>
        <ThemeColorPresets>
          <MotionLazyContainer>
            <Provider store={store}>
              <RouterProvider
                router={routes}
              />

              {/* <BuilderScreen/> */}
              {/* <ViewScreen data={{ craftState: localStorage.getItem("state") || defaultCraftState }} /> */}
            </Provider>
          </MotionLazyContainer>
        </ThemeColorPresets>
      </ThemeProvider>
    </>
  );
}

export default App;
