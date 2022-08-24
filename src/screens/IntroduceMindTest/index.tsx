import Swiper from "react-native-swiper";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import { OnBoardingStackScreenProps } from "@/types";
import { useRef } from "react";

const OnBoarding = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"OnBoarding">) => {
  const navigateToMindText = () => {
    navigation.navigate("MindTest");
  };
  const swiperRef = useRef(1);
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };
  //TODO: Swiper type적용

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={false}
      dotColor={"gray"}
      activeDotColor={"brown"}
    >
      <FirstPage swipeNextPage={swipeNextPage} />
      <SecondPage swipeNextPage={swipeNextPage} />
      <ThirdPage swipeNextPage={swipeNextPage} />
      <FourthPage navigateToMindText={navigateToMindText} />
    </Swiper>
  );
};

export default OnBoarding;
