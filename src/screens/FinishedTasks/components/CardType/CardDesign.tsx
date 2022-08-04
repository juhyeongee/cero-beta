import {
  View,
  Text,
  Image,
  ImageBackground,
  ImageProps,
  Pressable,
} from "react-native";
import Tag from "../Tag";
import { heightRatio, widthRatio, fontsizeRatio } from "@/utils";

import {
  Container,
  SubContainer,
  TitleContainer,
  MissionTitleText,
  Title,
  Date,
} from "./styledComponent";

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
    <ImageBackground
      resizeMode="cover"
      source={imageSource}
      style={{ marginBottom: heightRatio(16) }}
      imageStyle={{ borderRadius: 13 }}
    >
      <Container onPress={onClicked}>
        <SubContainer>
          <Title>{thisMissionNum}</Title>
        </SubContainer>
        <TitleContainer>
          <MissionTitleText>{missionTitle}</MissionTitleText>
        </TitleContainer>
        <SubContainer>
          <Date>2022 5월 28일</Date>
        </SubContainer>
        <Tag type={type} />
      </Container>
    </ImageBackground>
  );
};

export default CardDesign;
