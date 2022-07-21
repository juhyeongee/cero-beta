import { useRef } from "react";
import { Animated, Text, View, Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@assets/SvgIcon";
import Explanation from "../components/Explanation";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@navigations/IntroNav";
interface IContainerProps {
  theme: ITheme;
}

const FourthPage = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Container>
      <Animated.View style={{ opacity: fadeAnim }}>
        <SvgIcon
          name="yellowHighlight"
          style={{ position: "relative", bottom: "3%" }}
        />
      </Animated.View>
      <View style={{ position: "absolute", bottom: "25%" }}>
        <SvgIcon name="LastPot" />
      </View>
      <View
        style={{
          alignItems: "center",
          position: "absolute",
          bottom: 100,
          width: "100%",
        }}
      >
        <Pressable
          onPress={() => {
            fadeOut(), navigation.navigate("MindTest");
          }}
        >
          <Explanation text="씨앗이 움을 틔울수록, 김효준짱짱짱 님의 마음도 점점 편해지실 거예요." />
        </Pressable>
      </View>
    </Container>
  );
};

export default FourthPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n50};
`;
