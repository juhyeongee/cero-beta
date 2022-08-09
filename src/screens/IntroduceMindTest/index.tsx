import Swiper from "react-native-swiper";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import { OnBoardingStackScreenProps } from "@/types";

const OnBoarding = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"OnBoarding">) => {
  const navigateToMindText = () => {
    navigation.navigate("MindTest");
  };

  return (
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage navigateToMindText={navigateToMindText} />
    </Swiper>
  );
};

export default OnBoarding;
