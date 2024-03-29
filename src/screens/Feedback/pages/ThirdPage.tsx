import { View } from "react-native";
import { BigPrimaryBtn } from "@/components";
import { ITheme } from "@/types";
import {
  TitleText,
  GrayBtn,
  MainText,
  BtnInnerText,
  Container,
} from "../components/Styled";
import * as StoreReview from "expo-store-review";

interface IContainerProps {
  theme: ITheme;
}
interface IFirstPageProps {
  goFeedbackPage: () => void;
}
const ThirdPage = ({ goFeedbackPage }: IFirstPageProps) => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TitleText>더 잘할게요 🥺</TitleText>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainText>어떤 점이 아쉬우셨는지</MainText>
        <MainText>저희에게 알려주세요!</MainText>
      </View>
      <View
        style={{
          flex: 2.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        <BigPrimaryBtn
          text="1:1 문의하기"
          textBold={true}
          onPress={() => StoreReview.requestReview()}
        />
        <GrayBtn onPress={goFeedbackPage}>
          <BtnInnerText>다음에 할게요</BtnInnerText>
        </GrayBtn>
      </View>
    </Container>
  );
};

export default ThirdPage;
