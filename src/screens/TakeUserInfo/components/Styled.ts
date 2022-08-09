import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Platform } from "react-native";

interface IContainerProps {
  theme: ITheme;
}

export const Container = styled.View`
  color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  justify-content: center;
  padding: 8%;
  width: 100%;
  height: 100%;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const TitleText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  margin-bottom: 26px;
  font-size: 20px;
`;

export const MainText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  margin-top: 26px;
  font-size: 20px;
`;
