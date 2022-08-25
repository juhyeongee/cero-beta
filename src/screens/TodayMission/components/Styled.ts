import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
interface IContainerProps {
  theme: ITheme;
}

export const Container = styled.View`
  flex: 2;
  width: 100%;
`;

export const HeaderText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n800};
  font-size: 18px;
`;

export const MissionTitle = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-size: 20px;
  margin-right: 8px;
`;

export const Subtitle = styled.Text`
  margin-top: ${Platform.OS === "ios" ? "10px" : "0px"};
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.thinFont};
`;

export const FinishBtn = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.primary};
  font-size: 16px;
`;

export const ModalBox = styled.View`
  width: 100%;
  height: 45%;
  position: absolute;
  bottom: 0%;
`;

export const ModalContainer = styled.View`
  border-radius: 40px;
  padding: 8%;
  width: 100%;
  height: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n0}; ;
`;

export const GrayBG = styled.Pressable`
  flex: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background-color: ${(props: IContainerProps) => props.theme.color.n900}; ;
`;

export const MissionContext = styled.Text`
  font-size: 16px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  margin-top: 20px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

export const GreenText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.primary};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
