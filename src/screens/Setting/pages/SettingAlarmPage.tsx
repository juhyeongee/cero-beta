import SvgIcon from "@/assets/SvgIcon";
import { ITheme, SettingStackScreenProps } from "@/types";
import { Platform, View, Switch, Pressable } from "react-native";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Container, GrayBar, TitleText, SubText } from "../components/Styled";
import { useState } from "react";
import GreenTimePicker from "../components/settingHomeComp/NoticeBar";
import Theme from "@/constants/Theme";
interface StyledProps {
  theme: ITheme;
}
const SettingAlarmPage = ({
  route,
  navigation,
}: SettingStackScreenProps<"SettingAlarm">) => {
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [onTodayMissionAlarmToggle, setOnTodayMissionAlarmToggle] =
    useState(false);
  const [onHelloAlarmToggle, setOnHelloAlarmToggle] = useState(false);
  const [alarmTime, setAlarmTime] = useState("오전 11시 00분");

  const navigateToBack = () => {
    navigation.goBack();
  };
  const handleConfirm = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours >= 13) {
      setAlarmTime(`오후 ${hours - 12}시 ${minutes}분  `);
    } else {
      setAlarmTime(`오전 ${hours}시 ${minutes}분  `);
    }
  };
  const onPressTodayMissionAlarmToggle = () => {
    setOnTodayMissionAlarmToggle(!onTodayMissionAlarmToggle);
  };

  const onPressHelloAlarmToggle = () => {
    setOnHelloAlarmToggle(!onHelloAlarmToggle);
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
                trackColor={{
                  false: Theme.color.n500,
                  true: Theme.color.primary,
                }}
                thumbColor={Theme.color.n0}
                ios_backgroundColor={Theme.color.n500}
                onValueChange={onPressTodayMissionAlarmToggle}
                value={onTodayMissionAlarmToggle}
              />
            </View>

            <GreenTimePicker
              center={true}
              text1={alarmTime}
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
                <SubText>안부 알림 받기</SubText>
                <SmallGrayText>
                  오늘의 할 일 인증 시간이 지났을 때{"\n"}리마인드 알림을
                  받습니다.
                </SmallGrayText>
              </View>
              <Switch
                trackColor={{
                  false: Theme.color.n500,
                  true: Theme.color.primary,
                }}
                thumbColor={Theme.color.n0}
                ios_backgroundColor={Theme.color.n500}
                onValueChange={onPressHelloAlarmToggle}
                value={onHelloAlarmToggle}
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
          />
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default SettingAlarmPage;

const SmallGrayText = styled.Text`
  margin: 7px 0px;
  color: ${(props: StyledProps) => props.theme.color.n700};
  font-family: ${(props: StyledProps) =>
    Platform.OS === "ios"
      ? props.theme.font.mainFont
      : props.theme.font.androidFont};
  font-size: 12px;
`;
