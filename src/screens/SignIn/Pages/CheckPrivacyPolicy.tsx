import React, { useState } from "react";
import CheckBox from "expo-checkbox";
import SvgIcon from "@assets/SvgIcon";
import { IntroStackScreenProps } from "@/types";
import { BigPrimaryBtn } from "@components/index";
import {
  Container,
  SafeArea,
  PressableIconBox,
  MainContainer,
  AgreeText,
  PolicyGrayBar,
  OnelineContainer,
  WhiteSpace,
} from "../components/Styled";

const CheckPrivacyPolicy = ({
  route,
  navigation,
}: IntroStackScreenProps<"CheckPrivacyPolicy">) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigateToPrivacyPolicy = () => {
    navigation.navigate("PolicyDetail");
  };
  const navigateToJoinWithEmail = () => {
    navigation.navigate("JoinWithEmail");
  };
  return (
    <Container>
      <SafeArea>
        <MainContainer>
          <OnelineContainer>
            <PressableIconBox
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
            >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <AgreeText>약관 전체 동의</AgreeText>
            </PressableIconBox>
            <PressableIconBox onPress={navigateToPrivacyPolicy}>
              <SvgIcon name="rightArrow" />
            </PressableIconBox>
          </OnelineContainer>
          <PolicyGrayBar />
          <OnelineContainer>
            <PressableIconBox
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
            >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <AgreeText>(필수) 이메일 정보 제공 동의</AgreeText>
            </PressableIconBox>
            <PressableIconBox onPress={navigateToPrivacyPolicy}>
              <SvgIcon name="rightArrow" />
            </PressableIconBox>
          </OnelineContainer>
          <OnelineContainer>
            <PressableIconBox
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
            >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <AgreeText>(선택) 말걸기 알림 받기 동의</AgreeText>
            </PressableIconBox>
            <PressableIconBox onPress={navigateToPrivacyPolicy}>
              <SvgIcon name="rightArrow" />
            </PressableIconBox>
          </OnelineContainer>
          <OnelineContainer>
            <PressableIconBox
              onPress={() => setToggleCheckBox(!toggleCheckBox)}
            >
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              />
              <AgreeText>(선택) 이벤트 및 광고 수신동의</AgreeText>
            </PressableIconBox>
          </OnelineContainer>
          <WhiteSpace />
          <BigPrimaryBtn text="시작하기" onPress={navigateToJoinWithEmail} />
        </MainContainer>
      </SafeArea>
    </Container>
  );
};

export default CheckPrivacyPolicy;
