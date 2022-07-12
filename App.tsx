import * as React from "react";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import styled from "styled-components/native";
import Theme from "./constants/Theme";
import { ITheme } from "./styled";

import Home from "./screens/Home";
import Intro from "./screens/Intro";

import { NavigationContainer } from "@react-navigation/native";

interface IContainerProps {
  theme?: ITheme;
}
export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <Container>
          <Intro />
        </Container>
      </ThemeProvider>
    </NavigationContainer>
  );
}

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n700};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
