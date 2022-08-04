import { View, Text } from "react-native";
import styled from "styled-components/native";

const Example = () => {
  return (
    <View>
      <Text style={{}}>ㅇㅇㅇㅇㅇ</Text>
      <FirstText style={{}}>ㄴㄴㄴㄴㄴ</FirstText>
      <SecondText>ㄴㄴㄴㄴㄴ</SecondText>
      <Text
        style={{
          backgroundColor: "teal",
        }}
      >
        ㄴㄴㄴㄴㄴ
      </Text>
    </View>
  );
};

export default Example;

const SecondText = styled.Text`
  background-color: tomato;
`;
const FirstText = styled.Text`
  background-color: teal;
  font-size: 40px;
`;
