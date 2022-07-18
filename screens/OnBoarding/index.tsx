import Swiper from "react-native-swiper";
import { View, Text } from "react-native";
import { Layout } from "../components";
import SvgIcon from "../../assets/SvgIcon";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";

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
