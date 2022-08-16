import { ITheme } from "@/types";
import styled from "styled-components/native";
import { Platform } from "react-native";

interface StyledProps {
  theme: ITheme;
}

export const Container = styled.View`
  padding: 20%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TitleText = styled.Text`
  font-size: 20px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
`;

export const GrayBtn = styled.Pressable`
  margin: 4% 0% 0% 0%;
  height: 48px;
  width: 100%;
  background-color: ${(props: StyledProps) => props.theme.color.n400};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const BtnInnerText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.n800};
  margin-left: 2%;
  font-size: ${(props: StyledProps) =>
    Platform.OS === "ios" ? "16px" : "14px"};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont}; ;
`;

export const MainText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.n900};
  font-size: ${(props: StyledProps) =>
    Platform.OS === "ios" ? "18px" : "16px"};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont}; ;
`;

export const SubText = styled.Text`
  font-size: 16px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
