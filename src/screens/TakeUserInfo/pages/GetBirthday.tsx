import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { BigPrimaryBtn, OutlineBtn } from "@components/index";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Container, SafeArea, TitleText, MainText } from "../components/Styled";
import userInfoStore from "@/store/UserInfoStore";
import { observer } from "mobx-react";
interface IPageProps {
  swipeNextPage: () => void;
}
const GetBirthday = ({ swipeNextPage }: IPageProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { nickname, birthday } = userInfoStore;

  const handleConfirm = (date: Date) => {
    const age = new Date().getFullYear() - date.getFullYear();
    userInfoStore.updateAge(age);
    const newDay = dayjs(date);
    userInfoStore.updateBirthday(newDay.format("YYYY년 M월 DD일"));
    setDatePickerVisibility(false);
    setTimeout(() => swipeNextPage(), 700);
  };

  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1 }}>
          <TitleText>{nickname} 님의 생일을 알려주세요 </TitleText>
          <OutlineBtn
            text="선택하기"
            onPress={() => {
              setDatePickerVisibility(true);
            }}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={() => {
              setDatePickerVisibility(false);
            }}
            confirmTextIOS="완료"
            cancelTextIOS="취소하기"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
          />
          <MainText>{birthday ? `${birthday}` : ""}</MainText>
        </View>
        <View
          style={{
            flex: 3,
            width: "100%",
            justifyContent: "flex-end",
            paddingBottom: 40,
          }}
        >
          <BigPrimaryBtn
            text="다음"
            onPress={() => {
              userInfoStore.updateBirthday(birthday);
              swipeNextPage();
            }}
          />
        </View>
      </SafeArea>
    </Container>
  );
};
export default observer(GetBirthday);
