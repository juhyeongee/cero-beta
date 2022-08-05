import styled from "styled-components/native";
import { View, Text, Pressable, Platform } from "react-native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IntroText = styled.Text`
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export const FirstContainer = styled(Container)`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.firstBg};
`;

export const SecondContainer = styled(Container)`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.secondBg};
`;
export const ThirdContainer = styled(Container)`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.thirdBg};
`;

export const FourthContainer = styled(Container)`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.fourthBg};
`;

export const FifthContainer = styled(Container)`
  background-color: ${(props: IContainerProps) =>
    props.theme.introBgColor.fifthBg};
`;

export const LastContainer = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
`;

export const LastIntroText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-size: 16px;
  margin: 5px;
`;
