import { useState } from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import MultiChoiceBtn from "../../components/MultiChoiceBtn";
import { Layout } from "../../components";
import { MainText, SubText } from "../../components";
const GetGender = () => {
  const [checkedBtn, setCheckedBtn] = useState<string>("");
  return (
    <Layout>
      <View style={{ flex: 0.5 }}></View>
      <View style={{ flex: 1, width: "100%" }}>
        <MainText>효준 님의 성별을 알려주세요</MainText>

        <MultiChoiceBtn
          checkedBtnName={checkedBtn}
          text="여성"
          onPress={() => setCheckedBtn("여성")}
        />
        <MultiChoiceBtn
          checkedBtnName={checkedBtn}
          text="남성"
          onPress={() => setCheckedBtn("남성")}
        />
        <MultiChoiceBtn
          checkedBtnName={checkedBtn}
          text="기타"
          onPress={() => setCheckedBtn("기타")}
        />
        <MultiChoiceBtn
          checkedBtnName={checkedBtn}
          text="말하지 않을래요"
          onPress={() => setCheckedBtn("말하지 않을래요")}
        />
      </View>
      <View style={{ flex: 3 }}></View>
    </Layout>
  );
};
export default GetGender;
