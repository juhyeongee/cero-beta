import Swiper from "react-native-swiper";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Last from "./Last";

const Intro = () => {
  return (
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Last />
    </Swiper>
  );
};

export default Intro;
