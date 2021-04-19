import React from "react";
import LoginScreen from "./screens/LoginScreen";

import { useFonts } from "expo-font";

function App() {
  const [loaded] = useFonts({
    Poppins: require("./fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("./fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <LoginScreen />;
}

export default App;
