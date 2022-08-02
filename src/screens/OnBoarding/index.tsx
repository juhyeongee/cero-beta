import Swiper from "react-native-swiper";
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
