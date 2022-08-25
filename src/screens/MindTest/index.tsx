import { useRef } from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/mindtestProperties";
import TestPage from "./pages/TestPage";
import { OnBoardingStackScreenProps, EndingStackScreenProps } from "@/types";
import { findNotAnsweredQuestion, calculateDepressionScore } from "./functions";
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

  const onPressSubmitBtn = async () => {
    const number = await findNotAnsweredQuestion();
    if (number !== -1) {
      console.log("MindTest, 대답안한 number는: ", number);
      swiperRef.current.scrollBy(-(20 - number));
    } else {
      if (userInfoStore.todoNum !== 15) {
        const totalDepressionScore = await calculateDepressionScore("first");
        userInfoStore.updateFirstDepressionScore(totalDepressionScore);
        const result = userInfoStore.FIRST_DEPRESSION_SCORE;
        console.log("첫 마음점검 결과점수 : ", result);
      } else if (userInfoStore.todoNum === 15) {
        const totalDepressionScore = await calculateDepressionScore("last");
        userInfoStore.updateLastDepressionScore(totalDepressionScore);
        const result = userInfoStore.LAST_DEPRESSION_SCORE;
        console.log("마지막 마음점검 결과점수 : ", result);
      }
      navigation.navigate("LastLoadingScreen");
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
