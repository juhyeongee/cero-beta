import Swiper from "react-native-swiper";
import { View, Text } from "react-native";
import { Layout } from "@components/index";
import SvgIcon from "@assets/SvgIcon";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";

const OnBoarding = () => {
  return (
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </Swiper>
  );
};

export default OnBoarding;
