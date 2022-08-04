import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import { Layout } from "@/components";
import SvgIcon from "@/assets/SvgIcon";

// TODO 1 : mission type 별로 이미지 띄우기,텍스트만띄우기 화면  수정하기
// TODO 2: 텍스트와  이미지 서버에서  가져오기
interface IContainerProps {
  theme: ITheme;
}
interface Props {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  missionTitle: string;
  missionType: string;
}
const DetailModal = ({
  modalVisible,
  setModalVisible,
  missionTitle,
  missionType,
}: Props) => {
  return (
    <Modal
      style={{ flex: 1 }}
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Layout>
        <Header>
          <View>
            <MainText>{missionTitle}</MainText>
            <DateText>2022년 5월 28일</DateText>
          </View>
          <Pressable onPress={() => setModalVisible(false)}>
            <SvgIcon name="exitX" />
          </Pressable>
        </Header>
        <Body>
          <ScrollView>
            <Pressable>
              <Image
                style={{
                  marginBottom: 24,
                  width: "100%",
                  height: 300,
                  borderRadius: 20,
                }}
                resizeMode="stretch"
                source={require("@assets/images/exampleImage.png")}
              />
            </Pressable>
            <Words>
              통신·방송의 시설기준과 신문의 기능을 보장하기 위하여 필요한 사항은
              법률로 정한다. 대통령으로 선거될 수 있는 자는 국회의원의
              피선거권이 있고 선거일 현재 40세에 달하여야 한다. 각급
              선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
              모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지
              아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과
              적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지
              아니한다. 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다.
              혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고
              유지되어야 하며, 국가는 이를 보장한다. 지방자치단체는 주민의
              복리에 관한 사무를 처리하고 재산을 관리하며, 법령의 범위안에서
              자치에 관한 규정을 제정할 수 있다.통신·방송의 시설기준과 신문의
              기능을 보장하기 위하여 필요한 사항은 법률로 정한다. 대통령으로
              선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에
              달하여야 한다. 각급 선거관리위원회의 조직·직무범위 기타 필요한
              사항은 법률로 정한다. 모든 국민은 신체의 자유를 가진다. 누구든지
              법률에 의하지 아니하고는 체포·구속·압수·수색 또는 심문을 받지
              아니하며, 법률과 적법한 절차에 의하지 아니하고는 처벌·보안처분
              또는 강제노역을 받지 아니한다. 대통령은 조국의 평화적 통일을 위한
              성실한 의무를 진다. 혼인과 가족생활은 개인의 존엄과 양성의 평등을
              기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다.
              지방자치단체는 주민의 복리에 관한 사무를 처리하고 재산을 관리하며,
              법령의 범위안에서 자치에 관한 규정을 제정할 수 있다.
            </Words>
          </ScrollView>
        </Body>
      </Layout>
    </Modal>
  );
};

export default DetailModal;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Body = styled.View`
  flex: 6;
  width: 100%;
`;

const MainText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: 20px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
`;

const DateText = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.thickFont};
  font-size: 10px;
  color: ${(props: IContainerProps) => props.theme.color.n700};
`;

const Words = styled.Text`
  font-family: ${(props: IContainerProps) => props.theme.font.mainFont};
  font-size: 14px;
  color: ${(props: IContainerProps) => props.theme.color.n900};
  line-height: 24px;
`;
