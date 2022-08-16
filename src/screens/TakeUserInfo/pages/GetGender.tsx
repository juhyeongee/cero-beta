import { useState } from "react";
import { View, Text } from "react-native";
import MultiChoiceBtn from "@components/MultiChoiceBtn";
import { Container, SafeArea, TitleText } from "../components/Styled";
import { observer } from "mobx-react";
import userInfoStore from "@/store/UserInfoStore";
import { BigPrimaryBtn, OutlineBtn } from "@components/index";
interface IPageProps {
  swipeNextPage: () => void;
}
const GetGender = ({ swipeNextPage }: IPageProps) => {
  const [gender, setGender] = useState("");
  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 2, width: "100%" }}>
          <TitleText>{userInfoStore.nickname} 님의 성별을 알려주세요</TitleText>
          <MultiChoiceBtn
            checkedBtnName={gender}
            text="여성"
            onPress={() => setGender("여성")}
          />
          <MultiChoiceBtn
            checkedBtnName={gender}
            text="남성"
            onPress={() => {
              setGender("남성");
            }}
          />
          <MultiChoiceBtn
            checkedBtnName={gender}
            text="기타"
            onPress={() => {
              setGender("기타");
            }}
          />
          <MultiChoiceBtn
            checkedBtnName={gender}
            text="말하지 않을래요"
            onPress={() => {
              setGender("말하지 않을래요");
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            width: "100%",
            justifyContent: "flex-end",
            paddingBottom: 40,
          }}
        >
          <BigPrimaryBtn
            text="다음"
            textBold={false}
            onPress={() => {
              userInfoStore.updateGender(gender);
              swipeNextPage();
            }}
          />
        </View>
      </SafeArea>
    </Container>
  );
};
export default observer(GetGender);
