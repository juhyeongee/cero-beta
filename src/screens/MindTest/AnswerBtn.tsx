import React, { useState, useEffect } from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";

interface IContainerProps {
  theme?: ITheme;
  checked: boolean;
}

interface Props {
  clickedBtnNumber: number;
  number: number;
  content: string;
  onHandleClickBtnNumber?: string;
}

const AnswerBtn = ({ clickedBtnNumber, number, content }: Props) => {
  return (
    <Container
      checked={clickedBtnNumber === number}
      onPress={() => {
        console.log("clicked");
      }}
    >
      <AnswerBtnText checked={clickedBtnNumber === number}>
        {content}
      </AnswerBtnText>
    </Container>
  );
};

export default AnswerBtn;

const Container = styled.Pressable`
  justify-content: center;
  width: 100%;
  background-color: ${(props: IContainerProps) =>
    props.checked ? props.theme?.color.n900 : props.theme?.color.n400};
  border-radius: 10px;
  height: 56px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;

const AnswerBtnText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme?.font.mainFont};
  font-size: 16px;
  color: ${(props: IContainerProps) =>
    props.checked ? props.theme?.color.n100 : props.theme?.color.n900};
`;
