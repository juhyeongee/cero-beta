import React, { useState } from "react";
import { View } from "react-native";
import { Layout } from "@components/index";
import styled from "styled-components/native";
import { SubText, MainText } from "@components/index";
import { questionObj } from "@constants/mindtestProperties";
import AnswerBtn from "../AnswerBtn";
import { BigPrimaryBtn } from "@components/index";

interface Props {
  setShowIntroduceScreen?: () => void;
  pageNumber: number;
  submitPress: () => void;
}
const TestPage = ({
  setShowIntroduceScreen,
  pageNumber,
  submitPress,
}: Props) => {
  const [clickedBtnNumber, setClickedBtnNumber] = useState(20);

  return (
    <Layout>
      <LastWeekTextContainer>
        <SubText>최근 일주일 동안...</SubText>
      </LastWeekTextContainer>
      <QuestionContainer>
        <MainText>{questionObj[1]}</MainText>
        {/* { 
            TODO:pageNumber넣으면 또 타입에러 뜬다... 진짜 1도모르겠다 ㅅㅂ
        } */}
      </QuestionContainer>
      <ButtonContainer>
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          number={1}
          content="극히 드물게"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          number={2}
          content="가끔 (1~2일)"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          number={3}
          content="자주 (3~4일)"
        />
        <AnswerBtn
          clickedBtnNumber={clickedBtnNumber}
          number={4}
          content="거의 대부분 (5~7일)"
        />
      </ButtonContainer>
      <View style={{ width: "100%", position: "absolute", bottom: "5%" }}>
        {pageNumber === 20 && (
          <BigPrimaryBtn text="제출하기" onPress={submitPress} />
        )}
      </View>
    </Layout>
  );
};

const QuestionContainer = styled.View`
  width: 100%;
  flex: 1.5;
`;
const ButtonContainer = styled.View`
  flex: 8;
  width: 100%;
`;

const LastWeekTextContainer = styled.View`
  width: 100%;
  justify-content: flex-end;
  flex: 1.5;
`;

export default TestPage;
