import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import styled from "styled-components/native";
import Theme from "./constants/Theme";
import { ITheme } from "./styled";

import Home from "./screens/Home";

interface IContainerProps {
  theme?: ITheme;
}
export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.white};
  flex: 1;
  justify-content: center;
  align-items: center;
`;
