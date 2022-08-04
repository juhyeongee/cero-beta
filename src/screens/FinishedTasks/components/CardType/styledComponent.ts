import styled, { css } from "styled-components/native";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";
import { ITheme } from "@/types";
import { View, Text, Pressable, Platform } from "react-native";

interface IContainerProps {
  theme: ITheme;
}
export const Container = styled.Pressable`
  padding-left: ${widthRatio(32)}px;
  padding-right: ${widthRatio(32)}px;
  padding-top: ${Platform.select({
    ios: css`
      ${heightRatio(47)}px
    `,
    android: css`
      ${heightRatio(20)}px
    `,
  })};
  padding-bottom: ${Platform.select({
    ios: css`
      ${heightRatio(47)}px
    `,
    android: css`
      ${heightRatio(20)}px
    `,
  })};
  height: ${heightRatio(200)}px;
  width: 100%;
  border-radius: 10px;
  flex: 1;
`;

export const SubContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  flex: 1.6;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
export const MissionTitleText = styled.Text`
  flex-direction: column;
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-size: ${Platform.select({
    ios: css`
      ${fontsizeRatio(24)}px
    `,
    android: css`
      ${fontsizeRatio(18)}px
    `,
  })};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
export const Date = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n800};
`;
