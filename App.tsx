import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components/native";
import Theme from "./constants/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { IntroNav } from "./navigation/IntroNav";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <IntroNav />
      </ThemeProvider>
    </NavigationContainer>
  );
}
