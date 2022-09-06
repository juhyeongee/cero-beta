import Swiper from "react-native-swiper";
import GetGender from "./pages/GetGender";
import GetBirthday from "./pages/GetBirthday";
import GetNickName from "./pages/GetNickName";
import Confirm from "./pages/Confirm";
import { useRef } from "react";
import { OnBoardingStackScreenProps } from "@/types";

const TakeUserInfo = ({
  route,
  navigation,
}: OnBoardingStackScreenProps<"TakeUserInfo">) => {
  const swiperRef = useRef<any>(1);
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };

  const navigateToMindText = () => {
    navigation.navigate("OnBoarding");
  };

  return (
    <Swiper ref={swiperRef} loop={false} showsPagination={false}>
      <GetNickName swipeNextPage={swipeNextPage} />
      <GetBirthday swipeNextPage={swipeNextPage} />
      <GetGender swipeNextPage={swipeNextPage} />
      <Confirm navigateToMindText={navigateToMindText} />
    </Swiper>
  );
};

export default TakeUserInfo;
