import React, { useState } from "react";
import { View } from "react-native";
import { SubText, TitleText } from "../components";
import { questionObj } from "@constants/mindtestProperties";
import { BigPrimaryBtn } from "@/components";
import {
  Container,
  SafeArea,
  AnswerBtn,
  QuestionContainer,
  ButtonContainer,
  LastWeekTextContainer,
} from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IProps {
  pageNumber: number;
  onPressSubmitBtn: () => void;
  swipeNextPage: () => void;
}
const TestPage = ({ swipeNextPage, pageNumber, onPressSubmitBtn }: IProps) => {
  const [clickedBtnNumber, setClickedBtnNumber] = useState(0);

  const onHandleClickBtnNumber = (btnNumber: number) => {
    setClickedBtnNumber(btnNumber);
    AsyncStorage.setItem(`answer${pageNumber}`, `${clickedBtnNumber}`);
    setTimeout(() => swipeNextPage(), 200);
  };

  const getAsyncData = async () => {
    AsyncStorage.getAllKeys().then((a) => console.log(a));
  };

  return (
    <Container>
      <SafeArea>
        <LastWeekTextContainer>
          <SubText>최근 일주일 동안...</SubText>
        </LastWeekTextContainer>
        <QuestionContainer>
          <TitleText>{questionObj[pageNumber]}</TitleText>
        </QuestionContainer>
        <ButtonContainer>
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={1}
            content="극히 드물게"
            onHandleClickBtnNumber={onHandleClickBtnNumber}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={2}
            content="가끔 (1~2일)"
            onHandleClickBtnNumber={onHandleClickBtnNumber}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={3}
            content="자주 (3~4일)"
            onHandleClickBtnNumber={onHandleClickBtnNumber}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={4}
            content="거의 대부분 (5~7일)"
            onHandleClickBtnNumber={onHandleClickBtnNumber}
          />
        </ButtonContainer>
        <View style={{ width: "100%", position: "absolute", bottom: "5%" }}>
          {pageNumber === 20 && (
            <>
              <BigPrimaryBtn text="저장된 데이터보기" onPress={getAsyncData} />
              <BigPrimaryBtn text="제출하기" onPress={onPressSubmitBtn} />
            </>
          )}
        </View>
      </SafeArea>
    </Container>
  );
};

export default TestPage;
