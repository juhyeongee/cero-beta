import { View, Text } from "react-native";
import SvgIcon from "@assets/SvgIcon";
import { DescCard, DescContainer, Container } from "../components";
interface IPageProps {
  swipeNextPage: () => void;
}
const ThirdPage = ({ swipeNextPage }: IPageProps) => {
  return (
    <Container onPress={swipeNextPage}>
      <View style={{ position: "absolute", bottom: "25%" }}>
        <SvgIcon name="LastPot" />
      </View>
      <DescContainer onPress={swipeNextPage}>
        <DescCard text="앞으로 14일간, 저희가 드리는 매일의 작은 할 일을 하며 씨앗을 돌봐주세요." />
      </DescContainer>
    </Container>
  );
};

export default ThirdPage;
