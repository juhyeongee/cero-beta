import { useRef } from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/properties";
import TestPage from "./pages/TestPage";
import { OnBoardingStackScreenProps } from "@/types";
import { findNotAnsweredQuestion, calculateDepressionScore } from "./functions";
import userInfoStore from "@/store/UserInfoStore";

const MindTest = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"MindTest">) => {
  const swiperRef = useRef<any>();
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };

  const onPressSubmitBtn = async () => {
    const number = await findNotAnsweredQuestion();
    if (number !== -1) {
      swiperRef.current.scrollBy(-(20 - number));
    } else {
      if (userInfoStore.todoNum !== 15) {
        const totalDepressionScore = await calculateDepressionScore("first");
        userInfoStore.updateFirstDepressionScore(totalDepressionScore);
        navigation.navigate("FirstLoadingScreen");
      } else if (userInfoStore.todoNum === 15) {
        const totalDepressionScore = await calculateDepressionScore("last");
        userInfoStore.updateLastDepressionScore(totalDepressionScore);
        navigation.navigate("LastLoadingScreen");
      }
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
