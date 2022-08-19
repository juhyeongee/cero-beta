import { View, Text, Pressable, SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";
import SvgIcon from "@/assets/SvgIcon";
import userInfoStore from "@/store/UserInfoStore";
import AutoHeightImage from "react-native-auto-height-image";
import { observer } from "mobx-react";
import { Image } from "react-native-svg";

interface IPlantContainerProps {
  plantSource: number;
}
const PlantContainer = ({ plantSource }: IPlantContainerProps) => {
  return (
    <Container>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="LastWindow" />
      </View>
      <View style={{ position: "absolute", bottom: "20%" }}>
        <AutoHeightImage width={200} source={plantSource} />
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
