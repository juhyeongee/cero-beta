import styled from "styled-components/native";
import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import { ITheme } from "@/../styled";
import { useState } from "react";
import Tag from "./Tag";
import DetailModal from "./DetailModal";

interface IContainerProps {
  theme: ITheme;
}
const Card = () => {
  const [type, setType] = useState("photo");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <BGPhoto
    //   source={require("@assets/images/exampleImage.png")}
    //   resizeMode="cover"
    //   style={{ flex: 1 }}
    // >
    <>
      {type === "text" && (
        <>
          <DetailModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <Container onPress={() => setModalVisible(!modalVisible)}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Title>01</Title>
            </View>
            <View style={{ flex: 1.4, justifyContent: "center" }}>
              <MissionNum>하늘 사진</MissionNum>
            </View>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Date>2022 5월 28일</Date>
            </View>
            <Tag type={type} />
          </Container>
        </>
      )}
      {type === "photo" && (
        <>
          <DetailModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <ImageBackground
            resizeMode="cover"
            source={require("@assets/images/exampleImage.png")}
            style={{ marginBottom: 16 }}
            imageStyle={{ borderRadius: 13 }}
          >
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <BGPhoto>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Title>01</Title>
                </View>
                <View style={{ flex: 1.4, justifyContent: "center" }}>
                  <MissionNum>하늘 사진</MissionNum>
                </View>
                <View style={{ flex: 1, justifyContent: "center" }}>
                  <Date>2022 5월 28일</Date>
                </View>
                <Tag type={type} />
              </BGPhoto>
            </Pressable>
          </ImageBackground>
        </>
      )}
    </>
  );
};

const BGPhoto = styled.View`
  padding: 8%;
  padding-top: 12%;
  padding-bottom: 12%;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  flex: 1;
`;

const Container = styled.Pressable`
  background-color: ${(props: IContainerProps) =>
    props.theme && props.theme.color.n400};
  padding: 8%;
  padding-top: 12%;
  padding-bottom: 12%;
  height: 200px;
  width: 100%;
  border-radius: 10px;
  flex: 1;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
const MissionNum = styled.Text`
  color: ${(props: IContainerProps) => props.theme.color.n900};
  font-size: 24px;
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
`;
const Date = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};

  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n800};
`;
const Tags = styled.View``;
export default Card;
