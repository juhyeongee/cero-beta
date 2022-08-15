import SvgIcon from "@/assets/SvgIcon";
import { ITheme, SettingStackScreenProps } from "@/types";
import { Platform, View, Switch, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Container, GrayBar, TitleText, SubText } from "../components/Styled";
import { useState } from "react";
import GreenTimePicker from "../components/settingHomeComp/NoticeBar";
interface StyledProps {
  theme: ITheme;
}
const SettingAlarmPage = ({
  route,
  navigation,
}: SettingStackScreenProps<"SettingAlarm">) => {
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [onToggle, setOnToggle] = useState(false);
  const navigateToBack = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    console.log("타임 지정 완료");
  };
  const toggleSwitch = () => {
    console.log("토글 변경");
    setOnToggle(!onToggle);
  };
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-around" }}>
          <Pressable onPress={navigateToBack}>
            <SvgIcon name="leftArrow" />
          </Pressable>
          <TitleText>알림 설정</TitleText>
        </View>
        <View style={{ flex: 2, justifyContent: "space-around" }}>
          <View style={{ flex: 2 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <SubText>할 일 안내 알림 받기</SubText>
                <SmallGrayText>
                  지정한 시간에 매일 ‘오늘 할 일’ 알림을 보내드려요.
                </SmallGrayText>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={onToggle ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={onToggle}
              />
            </View>

            <GreenTimePicker
              center={true}
              text1="오전 5시 25분"
              onPress={() => setIsTimePickerVisible(true)}
            />
            <GrayBar />
          </View>
          <View style={{ flex: 2.5 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ width: "80%" }}>
                <SubText>안부알림 받기</SubText>
                <SmallGrayText>
                  할 일 인증 기간이 2시간 남았을 때 혹은 인증 시간이 지났을 때
                  리마인드 알림을 받습니다.
                </SmallGrayText>
              </View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={onToggle ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={onToggle}
              />
            </View>
            <GrayBar />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={() => {
              setIsTimePickerVisible(false);
            }}
            confirmTextIOS="완료"
            cancelTextIOS="취소하기"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date()}
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default SettingAlarmPage;

const SmallGrayText = styled.Text`
  margin-top: 5px;
  color: ${(props: StyledProps) => props.theme.color.n700};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  font-size: 12px;
`;
