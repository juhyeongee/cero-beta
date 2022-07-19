import Swiper from "react-native-swiper";
import { View, Text } from "react-native";
import { Layout } from "../../components";
import SvgIcon from "../../assets/SvgIcon";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";

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
