import { useRef } from "react";
import { Animated, Text, View, Pressable } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/../styled";
import SvgIcon from "@assets/SvgIcon";
import Explanation from "../components/Explanation";
import MakeSeedModal from "../components/MakeSeedModal";

interface IContainerProps {
  theme: ITheme;
}

const ToMindTestModalPage = () => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

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
    <>
      <Container>
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
          <Pressable onPress={fadeOut}>
            <Animated.View style={{ opacity: fadeAnim }}>
              <Explanation text="씨앗이 움을 틔울수록, 김효준짱짱짱 님의 마음도 점점 편해지실 거예요." />
            </Animated.View>
          </Pressable>
        </View>
      </Container>
      <MakeSeedModal />
    </>
  );
};

export default ToMindTestModalPage;

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: ${(props: IContainerProps) => props.theme.color.n200};
`;
