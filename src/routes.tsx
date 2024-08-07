import { defaultCraftState } from "constants/defaultCraftState";
import { createBrowserRouter } from "react-router-dom";
import BuilderScreen from "sections/builder/builderScreen";
import ViewScreen from "sections/builder/viewScreen";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <BuilderScreen />,
  },
  {
    path: "/preview",
    element: (
      <ViewScreen
        data={{
          craftState: localStorage.getItem("state") || defaultCraftState,
        }}
      />
    ),
  },
]);
