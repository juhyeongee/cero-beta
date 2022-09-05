import { View, Text, Pressable, SafeAreaView, Platform } from "react-native";
import { observer } from "mobx-react";
import SvgIcon from "@assets/SvgIcon";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { useEffect, useState } from "react";

interface StyledProps {
  theme: ITheme;
}
interface IAccodionProps {
  questionNum: number;
  texts: any;
}

const GrayAcchodion = ({ questionNum, texts }: IAccodionProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container onPress={() => setClicked(!clicked)}>
      <QuestionText>{texts[questionNum]["Q"]}</QuestionText>
      {clicked && <SmallGrayText>{texts[questionNum]["A"]}</SmallGrayText>}
    </Container>
  );
};

export default GrayAcchodion;

const Container = styled.Pressable`
  background-color: ${(props: StyledProps) => props.theme.color.n100};
  width: 100%;
  border-radius: 10px;
  padding: 6% 8%;
  margin: 1% 0%;
  justify-content: center;
`;

const SmallGrayText = styled.Text`
  margin-top: 10px;
  color: ${(props: StyledProps) => props.theme.color.n800};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
`;
const QuestionText = styled.Text`
  color: ${(props: StyledProps) => props.theme.color.n800};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
`;
