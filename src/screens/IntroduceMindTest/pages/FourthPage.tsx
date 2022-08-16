import { useState } from "react";
import SvgIcon from "@assets/SvgIcon";
import { DescCard, DescContainer, Container } from "../components";
import userInfoStore from "@/store/UserInfoStore";
import MakeSeedModal from "../components/MakeSeedModal";

interface IPageProps {
  navigateToMindText: () => void;
}
const FourthPage = ({ navigateToMindText }: IPageProps) => {
  // const fadeAnim = useRef(new Animated.Value(1)).current;
  const { nickname } = userInfoStore;
  const contentsText = `씨앗이 움을 틔울수록, ${nickname}님의 마음도 점점 편해지실 거예요.`;
  const [modalVisible, setModalVisible] = useState(false);
  // const fadeIn = () => {
  //   // Will change fadeAnim value to 1 in 5 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 1,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // };

  // const fadeOut = () => {
  //   // Will change fadeAnim value to 0 in 3 seconds
  //   Animated.timing(fadeAnim, {
  //     toValue: 0,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // };
  return (
    <Container>
      <SvgIcon
        name="yellowHighlight"
        style={{ position: "relative", bottom: "3%" }}
      />
      <SvgIcon name="LastPot" style={{ position: "absolute", bottom: "25%" }} />
      <DescContainer onPress={() => setModalVisible(true)}>
        <DescCard text={contentsText} />
      </DescContainer>
      <MakeSeedModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigateToMindText={navigateToMindText}
      />
    </Container>
  );
};

export default FourthPage;
