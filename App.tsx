import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import styled from "styled-components/native";
import Theme from "./constants/Theme";
import { ITheme } from "./styled";

import Home from "./screens/Home";
import Intro from "./screens/Intro";

interface IContainerProps {
  theme?: ITheme;
}
export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Intro />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n700};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
