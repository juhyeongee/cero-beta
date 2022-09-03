import { View, Text, Pressable, SafeAreaView, Platform } from "react-native";
import styled from "styled-components/native";
import SvgIcon from "@/assets/SvgIcon";
import userInfoStore from "@/store/UserInfoStore";
import AutoHeightImage from "react-native-auto-height-image";
import { observer } from "mobx-react";

interface IPlantContainerProps {
  plantSource: number;
}
const PlantContainer = ({ plantSource }: IPlantContainerProps) => {
  return (
    <Container>
      <View style={{ position: "absolute", right: "0%", top: "18%" }}>
        <SvgIcon name="LastWindow" />
      </View>
      <View style={{ flex: 4, justifyContent: "flex-end" }}>
        <AutoHeightImage width={370} source={plantSource} />
      </View>
      <View
        style={{
          flex: 1,
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
