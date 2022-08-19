import {
  View,
  Text,
  Image,
  Platform,
  ImageProps,
  Pressable,
  StyleSheet,
} from "react-native";
import Tag from "./Tag";
import SvgIcon from "@/assets/SvgIcon";
import styled from "styled-components/native";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
}

interface CardProps {
  thisMissionNum: number;
  type: string;
  onClicked: () => void;
  missionNameFromAsyncStorage: string | undefined;
  completeDateFromAsyncStorage: string | undefined;
}

const CardDesign = ({
  type,
  thisMissionNum,
  onClicked,
  missionNameFromAsyncStorage,
  completeDateFromAsyncStorage,
}: CardProps) => {
  const photo = require("@assets/images/exampleImage.png");
  const year = completeDateFromAsyncStorage?.slice(0, 2);
  const month = completeDateFromAsyncStorage?.slice(2, 4);
  const day = completeDateFromAsyncStorage?.slice(4, 6);

  return (
    <Pressable
      style={[styles.cardContainer, styles.shadow]}
      onPress={onClicked}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <GrayBox>
          <MissionNumText>{thisMissionNum}</MissionNumText>
        </GrayBox>
        <TitleText>{missionNameFromAsyncStorage}</TitleText>
      </View>
      <DateText>
        {year}년 {month}월 {day}일
      </DateText>
      <View style={styles.underBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SpreadText>돌아보기</SpreadText>
          {/* <SvgIcon name="bottomArrow" /> */}
        </View>
        <Tag photo={photo} type={type} />
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
