import React from "react";
import { View, Text, Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

interface Props {
  onPress?: () => void;
  text: string;
}

const OutlineBtn = ({ onPress, text }: Props) => {
  return (
    <OutlineButtonBG onPress={onPress}>
      <OutlineButtonText>{text}</OutlineButtonText>
    </OutlineButtonBG>
  );
};
const OutlineButtonBG = styled.Pressable`
  border: 1px solid ${(props: IContainerProps) => props.theme?.color.n900};
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props: IContainerProps) => props.theme?.color.n100};
  border-radius: 10px;
  height: 48px;
  padding: 10px 20px;
  margin-top: 10px;
`;
const OutlineButtonText = styled.Text`
  font-size: 16px;
  color: ${(props: IContainerProps) => props.theme?.color.n900};
`;

export default OutlineBtn;
