import { IntroStackScreenProps } from "@/types";
import { Animated, View, Pressable } from "react-native";
import React, { useState } from "react";
import { WINDOW_WIDTH, WINDOW_HEIGHT } from "@/constants/properties";
import SvgIcon from "@/assets/SvgIcon";
import { Container, IntroText } from "./components/Styled";
import { introText } from "@/constants/properties";
import LastPageComp from "./components/LastPageComp";
import currentPageStore from "@/store/CurrentPageStore";

const Intro = ({ route, navigation }: IntroStackScreenProps<"Intro">) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [pageNum, setPageNum] = useState(1);

  const handleBgAnimation = () => {
    const FirstBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const SecondBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 2,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const ThirdBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 3,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const FourthBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 4,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const FifthBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 5,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const SixthBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 6,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const SeventhBgAnimation = () => {
      Animated.timing(animation, {
        toValue: 7,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    if (pageNum === 1) {
      setPageNum(2);
      return FirstBgAnimation();
    }
    if (pageNum === 2) {
      setPageNum(3);

      return SecondBgAnimation();
    }
    if (pageNum === 3) {
      setPageNum(4);

      return ThirdBgAnimation();
    }
    if (pageNum === 4) {
      setPageNum(5);

      return FourthBgAnimation();
    }
    if (pageNum === 5) {
      setPageNum(6);

      return FifthBgAnimation();
    }
    if (pageNum === 6) {
      setPageNum(7);

      return SixthBgAnimation();
    }
    if (pageNum === 7) {
      return SeventhBgAnimation();
    }
  };
  const navigateToSignInScreen = () => {
    navigation.navigate("SignIn");
  };

  const navigateToOnboarding = () => {
    currentPageStore.updateScreen("OnBoardingNav");
  };

  const opacityInterpolation = animation.interpolate({
    inputRange: [0, 1, 2, 3, 4, 5, 6],
    outputRange: [1, 0.9, 0.85, 0.8, 0.7, 0.6, 0],
  });

  const animatedStyle = {
    backgroundColor: "black",
    opacity: opacityInterpolation,
  };

  return (
    <Container>
      <Pressable
        style={{
          padding: "8%",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flex: 1,
        }}
        onPress={handleBgAnimation}
      >
        <View
          style={{
            position: "absolute",
            right: "0%",
            top: "18%",
          }}
        >
          <SvgIcon name="LastWindow" />
        </View>
        <View style={{ position: "absolute", bottom: "0%" }}>
          <SvgIcon name="LastPot" />
        </View>
        <Animated.View
          style={{
            position: "absolute",
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT,
            flex: 1,
            ...animatedStyle,
          }}
        />
        <IntroText>{introText[pageNum - 1]}</IntroText>
        {pageNum === 7 && (
          <LastPageComp navigateToSignInScreen={navigateToOnboarding} />
        )}
      </Pressable>
    </Container>
  );
};

export default Intro;
