import {
  View,
  Text,
  Alert,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { observer } from "mobx-react";
import { Container, MainText, TitleText, FAQTitle } from "../components/Styled";
import SvgIcon from "@assets/SvgIcon";
import { FAQText } from "@constants/properties";
import styled from "styled-components/native";
import GrayAcchodion from "../components/GrayAcchodion";
import NoticeBar from "../components/settingHomeComp/NoticeBar";
import { SettingStackScreenProps, ITheme } from "@/types";
import { OptionBox } from "../components/settingHomeComp/OptionBox";

const SettingHomePage = ({
  route,
  navigation,
}: SettingStackScreenProps<"SettingHome">) => {
  function navigateToSettingAlarmPage() {
    navigation.navigate("SettingAlarm");
  }
  function navigateToResetNickname() {
    navigation.navigate("ResetNickname");
  }
  function navigateToResetData() {
    navigation.navigate("ResetData");
  }
  function navigateToNotice() {
    navigation.navigate("Notice");
  }
  function logout() {
    Alert.alert("로그아웃 하시겠어요?", "", [
      { text: "네", onPress: () => console.log("logout") },
      { text: "아니요", onPress: () => console.log("취소~") },
    ]);
  }
  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: "100%" }}>
            <TitleText>계정 설정</TitleText>
            <NoticeBar
              onPress={navigateToNotice}
              text1="공지"
              text2="2022 새로 커뮤니티 오픈 안내"
            />
            <OptionBox
              onPress={navigateToSettingAlarmPage}
              arrow={true}
              text="알림 설정하기"
              icon={<SvgIcon name="alarm" />}
            />
            <OptionBox
              onPress={navigateToResetNickname}
              arrow={true}
              text="닉네임 바꾸기"
              icon={<SvgIcon name="alarm" />}
            />
            <OptionBox
              onPress={navigateToResetData}
              arrow={true}
              text="데이터 초기화하기"
              icon={<SvgIcon name="alarm" />}
            />
            <OptionBox
              onPress={logout}
              arrow={false}
              text="로그아웃"
              icon={<SvgIcon name="logout" />}
            />

            <FAQTitle>자주 묻는 질문 (FAQ)</FAQTitle>
            {Object.keys(FAQText).map((item, index) => (
              <GrayAcchodion key={index} questionNum={parseInt(item)} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
};

export default observer(SettingHomePage);
