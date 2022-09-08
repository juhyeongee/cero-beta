import { Platform } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { useState } from "react";
import userInfoStore from "@/store/UserInfoStore";

interface StyledProps {
  theme: ITheme;
}
interface IAccodionProps {
  questionNum: number;
  texts: any;
}

const GrayAcchodion = ({ questionNum, texts }: IAccodionProps) => {
  const [clicked, setClicked] = useState(false);
  const { nickname } = userInfoStore;
  return (
    <Container onPress={() => setClicked(!clicked)}>
      <QuestionText>
        {texts[questionNum]["Q"].replace("유저", nickname)}
      </QuestionText>
      {clicked && (
        <SmallGrayText>
          {texts[questionNum]["A"].replace("유저", nickname)}
        </SmallGrayText>
      )}
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
