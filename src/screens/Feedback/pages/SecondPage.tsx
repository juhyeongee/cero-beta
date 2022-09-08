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

const SecondPage = ({ goFeedbackPage }: IFirstPageProps) => {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <TitleText>감사드려요 😄</TitleText>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MainText>어떤 점이 마음에 드셨는지</MainText>
        <MainText>새로를 칭찬해주세요!</MainText>
      </View>
      <View
        style={{
          flex: 2.5,
          width: "100%",
          alignItems: "center",
        }}
      >
        <BigPrimaryBtn
          text="리뷰 남기기"
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

export default SecondPage;
