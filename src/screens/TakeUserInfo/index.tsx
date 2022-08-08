import Swiper from "react-native-swiper";
import GetGender from "./pages/GetGender";
import GetBirthday from "./pages/GetBirthday";
import GetNickName from "./pages/GetNickName";
import Confirm from "./pages/Confirm";
import { useRef } from "react";

const TakeUserInfo = () => {
  const swiperRef = useRef();
  const swipeNextPage = () => {
    swiperRef.current.scrollBy(1);
  };
  //TODO: Swiper type적용
  return (
    <Swiper ref={swiperRef} loop={false} showsPagination={false}>
      <GetNickName swipeNextPage={swipeNextPage} />
      <GetBirthday swipeNextPage={swipeNextPage} />
      <GetGender swipeNextPage={swipeNextPage} />
      <Confirm />
    </Swiper>
  );
};

export default TakeUserInfo;
