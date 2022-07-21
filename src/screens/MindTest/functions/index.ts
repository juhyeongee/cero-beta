import { Animated } from "react-native";

export const fadeOut = (seedOpacity: Animated.Value) => {
  Animated.timing(seedOpacity, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};

export const fadeIn = (lightOpacity: Animated.Value) => {
  Animated.timing(lightOpacity, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};

export const moveUpFirst = (potY: Animated.Value) => {
  Animated.timing(potY, {
    toValue: 250,
    duration: 500,
    useNativeDriver: false,
  }).start();
};

export const moveUpSecond = (potY: Animated.Value) => {
  Animated.timing(potY, {
    toValue: 150,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};
export const moveUpThird = (potY: Animated.Value) => {
  Animated.timing(potY, {
    toValue: 50,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};

export const moveDownFirst = (seedY: Animated.Value) => {
  Animated.timing(seedY, {
    toValue: 100,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};
export const moveDownSecond = (seedY: Animated.Value) => {
  Animated.timing(seedY, {
    toValue: 250,
    duration: 1000,
    useNativeDriver: false,
  }).start();
};
