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
  const [clickedBtnNumber, setClickedBtnNumber] = useState(-1);
  const onHandleClickBtnNumber = async (pressedBtnNum: number) => {
    setClickedBtnNumber(pressedBtnNum);
    await AsyncStorage.setItem(`answer${pageNumber}`, `${pressedBtnNum}`);
    const result = await AsyncStorage.getItem(`answer${pageNumber}`);
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
            number={10}
            content="극히 드물게"
            onPress={() => onHandleClickBtnNumber(0)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={1}
            content="가끔 (1~2일)"
            onPress={() => onHandleClickBtnNumber(1)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={2}
            content="자주 (3~4일)"
            onPress={() => onHandleClickBtnNumber(2)}
          />
          <AnswerBtn
            clickedBtnNumber={clickedBtnNumber}
            number={3}
            content="거의 대부분 (5~7일)"
            onPress={() => onHandleClickBtnNumber(3)}
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
