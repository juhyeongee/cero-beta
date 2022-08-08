import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { BigPrimaryBtn } from "@components/index";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Container, SafeArea, TitleText, MainText } from "../components/Styled";

const GetBirthday = () => {
  const [birthday, setBirthday] = useState<string>("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    console.log("A date has been picked: ", date);
    const newDay = dayjs(date);

    newDay.format("YYYY-MM-DD");

    let year = newDay.year().toString();
    setBirthYear(year);
    let month = (newDay.month() + 1).toString();
    setBirthMonth(month);
    let day = newDay.date().toString();
    setBirthDate(day);

    setBirthday(newDay.format("YYYY년 M월 DD일"));
    hideDatePicker();
  };
  return (
    <Container>
      <SafeArea>
        <View style={{ flex: 0.5 }}></View>
        <View style={{ flex: 1 }}>
          <TitleText>효준 님의 생일을 알려주세요 </TitleText>
          <BigPrimaryBtn
            text="선택하기"
            onPress={() => {
              showDatePicker();
            }}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            confirmTextIOS="완료"
            cancelTextIOS="취소하기"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
          />
          <MainText>{birthday ? `${birthday}` : ""}</MainText>
        </View>
        <View style={{ flex: 3 }}></View>
      </SafeArea>
    </Container>
  );
};
export default GetBirthday;
