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
import userInfoStore from "@/store/UserInfoStore";

interface IProps {
  pageNumber: number;
  onPressSubmitBtn: () => void;
  swipeNextPage: () => void;
}
const TestPage = ({ swipeNextPage, pageNumber, onPressSubmitBtn }: IProps) => {
  const { todoNum } = userInfoStore;
  const [clickedBtnNumber, setClickedBtnNumber] = useState(-1);
  const onHandleClickBtnNumber = async (pressedBtnNum: number) => {
    setClickedBtnNumber(pressedBtnNum);
    if (todoNum === 15) {
      userInfoStore.updateLastMindTestResultObject(pageNumber, pressedBtnNum);
      console.log(`${pageNumber}페이지 클릭`);
    } else {
      userInfoStore.updateFirstMindTestResultObject(pageNumber, pressedBtnNum);
      console.log(`${pageNumber}페이지 클릭`);
    }
    setTimeout(() => swipeNextPage(), 200);
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
            number={4}
            content="극히 드물게"
            onPress={() => onHandleClickBtnNumber(4)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={3}
            content="가끔 (1~2일)"
            onPress={() => onHandleClickBtnNumber(3)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={2}
            content="자주 (3~4일)"
            onPress={() => onHandleClickBtnNumber(2)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={1}
            content="거의 대부분 (5~7일)"
            onPress={() => onHandleClickBtnNumber(1)}
          />
        </ButtonContainer>
        <View style={{ width: "100%", position: "absolute", bottom: "5%" }}>
          {pageNumber === 20 && (
            <>
              <BigPrimaryBtn text="제출하기" onPress={onPressSubmitBtn} />
            </>
          )}
        </View>
      </SafeArea>
    </Container>
  );
};

export default TestPage;
