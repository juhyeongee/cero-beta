import { View, Text, Pressable } from "react-native";
import { CompareResultText } from "@constants/properties";
import { SubText } from "../components/Styled";
import { BigPrimaryBtn } from "@/components";

const FourthPage = () => {
  return (
    <>
      <SubText>{CompareResultText["개선"]}</SubText>
      <View style={{ flex: 1, alignItems: "flex-end" }}></View>
      <BigPrimaryBtn text="엔딩 보기" />
    </>
  );
};

export default FourthPage;
