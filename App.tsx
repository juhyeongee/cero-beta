import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import styled from "styled-components/native";
import Theme from "./constants/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { IntroNav } from "./navigation/IntroNav";
import MindTest from "./screens/MindTest";
import {
  useFonts,
  NotoSansKR_100Thin,
  NotoSansKR_300Light,
  NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold,
  NotoSansKR_900Black,
} from "@expo-google-fonts/noto-sans-kr";

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <MindTest />
      </ThemeProvider>
    </NavigationContainer>
  );
}
