import { useRef } from "react";
import Swiper from "react-native-swiper";
import { questionObj } from "@constants/mindtestProperties";
import TestPage from "./pages/TestPage";
import { OnBoardingStackScreenProps } from "@/types";
import { findNotAnsweredQuestion } from "./functions";

const MindTest = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"MindTest">) => {
  const swiperRef = useRef();
  console.log("swiperRef : ", swiperRef);
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };
  const navigateToLoadingScreen = () => {
    navigation.navigate("LoadingPage");
  };
  const onPressSubmitBtn = async () => {
    const number = await findNotAnsweredQuestion();
    console.log(number);
    if (number !== -1) {
      swiperRef.current.scrollBy(-(20 - number));
      console.log("체크안한곳으로 이동");
    } else {
      navigateToLoadingScreen();
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
