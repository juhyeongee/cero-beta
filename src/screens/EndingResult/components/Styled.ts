import { ITheme } from "@/types";
import styled from "styled-components/native";
import { Platform } from "react-native";

interface StyledProps {
  theme: ITheme;
}

export const Container = styled.View`
  justify-content: center;
  flex: 1;
  background-color: ${(props: StyledProps) => props.theme.color.n50};
  padding: 8%;
  padding-top: 20%;
  padding-bottom: 20%;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
`;

export const SubText = styled.Text`
  font-size: 18px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
export const MainText = styled.Text`
  font-size: 20px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
export const BtnContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const BtnText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.primary};
`;

export const TextContainer = styled.View`
  flex: 20;
`;
