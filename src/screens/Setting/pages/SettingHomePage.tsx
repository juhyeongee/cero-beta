import {
  View,
  Text,
  Pressable,
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
import { ITheme } from "@/types";
import { OptionBox } from "../components/settingHomeComp/OptionBox";

const SettingHomePage = () => {
  function setAlarm() {
    console.log("setAlarm clicked");
  }
  function changeNickname() {
    console.log("change nickname clicked");
  }
  function dataReset() {
    console.log("data reset clicked");
  }
  function logout() {
    console.log("logout clicked");
  }
  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ height: "100%" }}>
            <TitleText>계정 설정</TitleText>
            <NoticeBar text1="공지" text2="2022 새로 커뮤니티 오픈 안내" />

            <OptionBox
              onPress={setAlarm}
              arrow={true}
              text="알림 설정하기"
              icon={<SvgIcon name="alarm" />}
            />
            <OptionBox
              onPress={changeNickname}
              arrow={true}
              text="닉네임 바꾸기"
              icon={<SvgIcon name="alarm" />}
            />
            <OptionBox
              onPress={dataReset}
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
