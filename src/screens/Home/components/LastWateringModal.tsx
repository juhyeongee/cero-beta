import SvgIcon from "@/assets/SvgIcon";
import { BigPrimaryBtn } from "@/components";
import Theme from "@/constants/Theme";
import currentPageStore from "@/store/CurrentPageStore";
import React from "react";
import { Modal, View, Text } from "react-native";

const LastWateringModal = () => {
  return (
    <Modal
      style={{ backgroundColor: "teal" }}
      animationType="none"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        console.log("moidal clsose");
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Theme.color.n0,
          padding: "8%",
        }}
      >
        <SvgIcon name="grayFlowerReaf" />
        <Text style={{ fontSize: 20, fontFamily: Theme.font.thickFont }}>
          꽃 피우기
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: Theme.color.n700,
            fontFamily: Theme.font.mainFont,
          }}
        >
          20개 질문, 평균 5분 소요
        </Text>
        <View
          style={{
            backgroundColor: Theme.color.n100,
            padding: "4%",
            paddingLeft: "8%",
            borderRadius: 10,
            marginTop: "8%",
            marginBottom: "8%",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: Theme.color.n900,
              fontFamily: Theme.font.mainFont,
            }}
          >
            드디어 꽃을 피우는 마지막 단계예요.
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: Theme.color.n900,
              fontFamily: Theme.font.mainFont,
            }}
          >
            온전히 집중할 수 있는 편안한 환경에서 대답해주세요.
          </Text>
        </View>
        <BigPrimaryBtn
          text="시작하기"
          onPress={() => currentPageStore.updateScreen("EndingStackNav")}
        />
      </View>
    </Modal>
  );
};

export default LastWateringModal;
