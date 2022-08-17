import { View, Text, Pressable, SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";
import SvgIcon from "@/assets/SvgIcon";
import userInfoStore from "@/store/UserInfoStore";
import AutoHeightImage from "react-native-auto-height-image";
import { observer } from "mobx-react";

const PlantContainer = () => {
  const { todoNum } = userInfoStore;
  const imageSourceArray = [
    require("@/assets/images/1.png"),
    require("@/assets/images/2.png"),
    require("@/assets/images/3.png"),
    require("@/assets/images/4.png"),
    require("@/assets/images/5.png"),
    require("@/assets/images/6.png"),
    require("@/assets/images/7.png"),
    require("@/assets/images/8.png"),
    require("@/assets/images/9.png"),
    require("@/assets/images/10.png"),
    require("@/assets/images/11.png"),
    require("@/assets/images/12.png"),
    require("@/assets/images/13.png"),
    require("@/assets/images/14.png"),
  ];

  return (
    <Container>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="LastWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "20%" }}>
        <AutoHeightImage width={200} source={imageSourceArray[todoNum - 1]} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: Platform.OS === "ios" ? "-10%" : "-15%",
        }}
      >
        <SvgIcon name="LastPot" />
      </View>
    </Container>
  );
};

export default observer(PlantContainer);

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.7;
`;
