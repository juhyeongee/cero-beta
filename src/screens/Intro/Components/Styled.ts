import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

export const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IntroText = styled.Text`
  text-align: center;
  line-height: 40px;
  color: white;
  font-size: 20px;
  margin: 5px;
`;

export const LastIntroText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n700};
  font-size: 16px;
  margin: 5px;
`;
