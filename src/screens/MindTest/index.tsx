import { useRef } from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/mindtestProperties";
import TestPage from "./pages/TestPage";
import { OnBoardingStackScreenProps } from "@/types";
import { findNotAnsweredQuestion } from "./functions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userInfoStore from "@/store/UserInfoStore";

const MindTest = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"MindTest">) => {
  const swiperRef = useRef();
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };
  const { firstMindTestResultObject } = userInfoStore;
  const calculateDepressionScore = async () => {
    const QUESTION_OBJ_LENGTH = Object.keys(questionObj).length;
    let totalScore = 0;
    for (let i = 1; i < QUESTION_OBJ_LENGTH + 1; i++) {
      const scoreString = firstMindTestResultObject[i];
      let score;
      if (typeof scoreString === "string") {
        score = parseInt(scoreString);
        totalScore += score;
      }
    }
    return totalScore;
  };

  const onPressSubmitBtn = async () => {
    const number = await findNotAnsweredQuestion();
    if (number !== -1) {
      console.log("number !== -1");
      swiperRef.current.scrollBy(-(20 - number));
    } else {
      console.log("ssss");
      const totalDepressionScore = await calculateDepressionScore();
      userInfoStore.updateFirstDepressionScore(totalDepressionScore);
      navigation.navigate("LoadingPage");
    }
  };

  return (
    <Swiper ref={swiperRef} loop={false} showsPagination={false}>
      {Object.keys(questionObj).map((item, index) => (
        <TestPage
          swipeNextPage={swipeNextPage}
          pageNumber={parseInt(item)}
          key={index}
          onPressSubmitBtn={onPressSubmitBtn}
        />
      ))}
    </Swiper>
  );
};

export default MindTest;
