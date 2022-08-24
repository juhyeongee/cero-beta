import { View, Text, Pressable } from "react-native";
import { CompareResultText } from "@constants/properties";
import { SubText } from "../components/Styled";
import { BigPrimaryBtn } from "@/components";
import userInfoStore from "@/store/UserInfoStore";
import { useEffect, useState } from "react";

interface IFourthPageProps {
  navigateToEndingMovie: () => void;
}
const FourthPage = ({ navigateToEndingMovie }: IFourthPageProps) => {
  const { firstDepressionState, lastDepressionState } = userInfoStore;
  const [result, setResult] = useState("better");
  useEffect(() => getResultState(), []);
  const getResultState = () => {
    if (
      firstDepressionState === "good" ||
      firstDepressionState === "moderate"
    ) {
      if (
        lastDepressionState === "good" ||
        lastDepressionState === "moderate"
      ) {
        setResult("keepGood");
      }
    } else if (
      lastDepressionState === "attention" ||
      lastDepressionState === "serious"
    ) {
      setResult("worse");
    } else if (
      firstDepressionState === "serious" ||
      firstDepressionState === "attention"
    ) {
      if (
        lastDepressionState === "good" ||
        lastDepressionState === "moderate"
      ) {
        setResult("better");
      } else if (
        lastDepressionState === "attention" ||
        lastDepressionState === "serious"
      ) {
        setResult("keepAttention");
      }
    }
  };
  return (
    <>
      <SubText>{CompareResultText[result]}</SubText>
      <View style={{ flex: 1, alignItems: "flex-end" }}></View>
      <BigPrimaryBtn text="엔딩 보기" onPress={navigateToEndingMovie} />
    </>
  );
};

export default FourthPage;
