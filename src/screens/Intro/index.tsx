import Swiper from "react-native-swiper";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Last from "./Last";
import { IntroStackScreenProps } from "@/types";

const Intro = ({ route, navigation }: IntroStackScreenProps<"Intro">) => {
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Swiper loop={false} dotColor={"gray"} activeDotColor={"brown"}>
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Last navigateToSignInScreen={navigateToSignInScreen} />
    </Swiper>
  );
};

export default Intro;
