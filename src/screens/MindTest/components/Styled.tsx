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
  font-size: 20px;
  line-height: ${(props: IContainerProps) =>
    Platform.OS === "ios" ? "28px" : "32px"}; ;
`;

export const SubText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  margin-bottom: 10px;
  font-size: 14px;
`;

export const QuestionContainer = styled.View`
  justify-content: center;
  width: 100%;
  flex: 1.5;
`;

export const ButtonContainer = styled.View`
  padding-top: 6%;
  flex: 9;
  width: 100%;
`;

export const LastWeekTextContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
  flex: 1.5;
`;
