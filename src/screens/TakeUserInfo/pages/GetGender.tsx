import { useState } from "react";
import { View, Text } from "react-native";
import MultiChoiceBtn from "@components/MultiChoiceBtn";
import { Container, SafeArea, TitleText } from "../components/Styled";

const GetGender = () => {
  const [checkedBtn, setCheckedBtn] = useState("");
  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 2, width: "100%" }}>
          <TitleText>효준 님의 성별을 알려주세요</TitleText>

          <MultiChoiceBtn
            checkedBtnName={checkedBtn}
            text="여성"
            onPress={() => setCheckedBtn("여성")}
          />
          <MultiChoiceBtn
            checkedBtnName={checkedBtn}
            text="남성"
            onPress={() => {
              setCheckedBtn("남성"), console.log("남자클릭됨");
            }}
          />
          <MultiChoiceBtn
            checkedBtnName={checkedBtn}
            text="기타"
            onPress={() => {
              setCheckedBtn("기타"), console.log("기타 클릭됨");
            }}
          />
          <MultiChoiceBtn
            checkedBtnName={checkedBtn}
            text="말하지 않을래요"
            onPress={() => {
              setCheckedBtn("말하지 않을래요"),
                console.log("말하지 않을래요 클릭됨");
            }}
          />
        </View>
        <View style={{ flex: 2 }}></View>
      </SafeArea>
    </Container>
  );
};
export default GetGender;
