import { View, Text, Image } from "react-native";
import styled from "styled-components/native";
import AutoHeightImage from "react-native-auto-height-image/";
import { ITheme } from "../../styled";
import SvgIcon from "../../assets/SvgIcon";
import BigPrimaryBtn from "../components/BigPrimaryBtn";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/IntroNav";

interface IContainerProps {
  theme?: ITheme;
}

const Last = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <Container>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="LastWindow" />
      </View>
      <View style={{ position: "relative", bottom: "5%" }}>
        <SvgIcon name="LogoWithTitle" />
      </View>
      <View style={{ position: "absolute", bottom: "0%" }}>
        <SvgIcon name="LastPot" />
      </View>
      <IntroText>매일 조금씩 더 괜찮은 우리,</IntroText>
      <IntroText>혼자들만의 14일 이야기</IntroText>
      <View style={{ width: "100%", position: "relative", top: "30%" }}>
        <BigPrimaryBtn
          text="시작하기"
          onPress={() => navigation.navigate("SignIn")}
        />
      </View>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props: IContainerProps) => props.theme?.color.n200};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
  box-sizing: border-box;
`;

const IntroText = styled.Text`
  color: ${(props: IContainerProps) => props.theme?.color.n700};
  font-size: 16px;
  margin: 5px;
`;

export default Last;
