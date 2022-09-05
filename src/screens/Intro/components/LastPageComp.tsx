import SvgIcon from "@/assets/SvgIcon";
import { BigPrimaryBtn } from "@/components";
import { View } from "react-native";
import { LastIntroText } from "./Styled";

interface IProps {
  navigateToSignInScreen: () => void;
}

const LastPageComp = ({ navigateToSignInScreen }: IProps) => {
  return (
    <>
      <View style={{ position: "relative", bottom: "5%" }}>
        <SvgIcon name="LogoWithTitle" />
      </View>
      <LastIntroText>매일 조금씩 더 괜찮은 우리,</LastIntroText>
      <LastIntroText>혼자들만의 14일 이야기</LastIntroText>
      <View style={{ width: "100%", position: "relative", top: "32%" }}>
        <BigPrimaryBtn text="시작하기" onPress={navigateToSignInScreen} />
      </View>
    </>
  );
};

export default LastPageComp;
