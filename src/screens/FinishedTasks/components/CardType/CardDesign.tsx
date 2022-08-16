import {
  View,
  Text,
  Image,
  Platform,
  ImageProps,
  Pressable,
  StyleSheet,
} from "react-native";
import Tag from "../Tag";
import SvgIcon from "@/assets/SvgIcon";

import styled from "styled-components/native";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

interface CardProps {
  thisMissionNum: number;
  missionTitle: string;
  type: string;
  onClicked: () => void;
  imageSource: ImageProps["source"];
}

const CardDesign = ({
  type,
  missionTitle,
  thisMissionNum,
  onClicked,
  imageSource,
}: CardProps) => {
  return (
    <Pressable
      style={[styles.cardContainer, styles.shadow]}
      onPress={onClicked}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <GrayBox>
          <MissionNumText>{thisMissionNum}</MissionNumText>
        </GrayBox>
        <TitleText>{missionTitle}</TitleText>
      </View>
      <DateText>2022 5월 28일</DateText>
      <View style={styles.underBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SpreadText>펼쳐보기</SpreadText>
          <SvgIcon name="bottomArrow" />
        </View>
        <Tag type={type} />
      </View>
    </Pressable>
  );
};

export default CardDesign;

const styles = StyleSheet.create({
  shadow: {
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 180,
    padding: 30,
    justifyContent: "space-between",
  },
  underBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});

const TitleText = styled.Text`
  font-size: 16px;
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const DateText = styled.Text`
  font-family: ${(props: IContainerProps) =>
    Platform.OS === "ios"
      ? props.theme.font.thickFont
      : props.theme.font.androidThickFont};
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const GrayBox = styled.View`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 22px;
  border-radius: 5px;
  background-color: ${(props: IContainerProps) => props.theme.color.n100};
`;

const MissionNumText = styled.Text`
  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const SpreadText = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n400};
`;
