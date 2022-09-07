import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

export const Container = styled.Pressable`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;

export const DescContainer = styled.Pressable`
  align-items: center;
  position: absolute;
  bottom: 100px;
  width: 100%;
`;
