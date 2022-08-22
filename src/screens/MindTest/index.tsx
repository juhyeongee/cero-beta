import { useRef } from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/mindtestProperties";
import TestPage from "./pages/TestPage";
import { OnBoardingStackScreenProps } from "@/types";
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
      console.log("출력 완료");
      const totalDepressionScore = await calculateDepressionScore();
      userInfoStore.updateFirstDepressionScore(totalDepressionScore);
      const result = await AsyncStorage.getItem("FIRST_DEPRESSION_SCORE");
      console.log(result);
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
