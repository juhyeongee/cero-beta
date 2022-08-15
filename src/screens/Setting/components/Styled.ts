import { ITheme } from "@/types";
import styled from "styled-components/native";
import { Platform } from "react-native";

interface StyledProps {
  theme: ITheme;
}
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${(props: StyledProps) => props.theme.color.n50};
  padding: 16% 8%;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
`;

export const SubText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.n900};
  font-size: 16px;
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

export const GrayBar = styled.View`
  position: relative;
  margin-top: 2%;
  margin-bottom: 3%;
  background-color: ${(props: StyledProps) => props.theme.color.n600};
  width: 100%;
  height: 1px;
`;

export const FAQTitle = styled.Text`
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  font-size: 14px;
  margin: 10% 0% 4% 0%;
  color: ${(props: StyledProps) => props.theme.color.n700};
`;
