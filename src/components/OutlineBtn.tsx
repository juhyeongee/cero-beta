import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
  marginBottom?: string;
  marginTop?: string;
}

interface Props {
  onPress?: () => void;
  text: string;
  marginBottom?: string;
  marginTop?: string;
}

const OutlineBtn = ({ onPress, text, marginBottom, marginTop }: Props) => {
  return (
    <OutlineButtonBG
      onPress={onPress}
      marginBottom={marginBottom}
      marginTop={marginTop}
    >
      <OutlineButtonText>{text}</OutlineButtonText>
    </OutlineButtonBG>
  );
};

const OutlineButtonBG = styled.Pressable`
  border: 1px solid ${(props: IContainerProps) => props.theme.color.n500};
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 12px;
`;

const OutlineButtonText = styled.Text`
  font-size: 16px;
  color: ${(props: IContainerProps) => props.theme.color.n800};
`;

export default OutlineBtn;
