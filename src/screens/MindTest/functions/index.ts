import { Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { questionObj } from "@/constants/properties";
import userInfoStore from "@/store/UserInfoStore";

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

export const findNotAnsweredQuestion = async () => {
  const { firstMindTestResultObject } = userInfoStore;
  for (let i = 1; i < Object.keys(questionObj).length + 1; i++) {
    if (!firstMindTestResultObject[i]) {
      return i;
    }
  }
  return -1;
};

export const calculateDepressionScore = async (type: string) => {
  const QUESTION_OBJ_LENGTH = Object.keys(questionObj).length;
  const { firstMindTestResultObject, lastMindTestResultObject } = userInfoStore;
  let totalScore = 0;
  for (let i = 1; i < QUESTION_OBJ_LENGTH + 1; i++) {
    if (type == "first") {
      const eachAnswer = firstMindTestResultObject[i];
      console.log("eachScore:", eachAnswer);
      if (i === 4 || i === 8 || i === 12 || i === 16) {
        totalScore += 5 - eachAnswer;
      } else {
        totalScore += eachAnswer;
      }
      console.log("Score variation:", totalScore);
    } else if (type == "last") {
      const eachAnswer = lastMindTestResultObject[i];
      if (i === 4 || i === 8 || i === 12 || i === 16) {
        totalScore += 5 - eachAnswer;
      } else {
        totalScore += eachAnswer;
      }
      console.log("Score variation:", eachAnswer);
    }
  }
  totalScore = totalScore - QUESTION_OBJ_LENGTH;
  console.log("totalScore", totalScore);
  return totalScore;
};
