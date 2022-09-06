import { View, Pressable, Modal } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";
import SvgIcon from "@/assets/SvgIcon";

interface StyledProps {
  theme: ITheme;
}
interface IThirdPageModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
}

export const ThirdPageModal = ({
  modalVisible,
  setModalVisible,
}: IThirdPageModalProps) => {
  const TitleText = styled.Text`
    color: ${(props: StyledProps) => props.theme.color.n900};
    font-size: 20px;
    margin-bottom: 8px;
  `;
  const BoldTitleText = styled.Text`
    font-weight: 700;
    color: ${(props: StyledProps) => props.theme.color.n900};
    font-size: 20px;
    margin-bottom: 2px;
  `;
  const Description = styled.Text`
    color: ${(props: StyledProps) => props.theme.color.n900};
    font-size: 16px;
    margin-top: 30px;
  `;

  const ModalBox = styled.View`
    width: 100%;
    height: 45%;
    position: absolute;
    bottom: 0%;
  `;

  const ModalContainer = styled.View`
    flex: 1;
    border-radius: 40px;
    padding: 12% 8%;
    width: 100%;
    height: 100%;
    background-color: ${(props: StyledProps) => props.theme.color.n0}; ;
  `;

  const GrayBG = styled.Pressable`
    flex: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background-color: ${(props: StyledProps) => props.theme.color.n900}; ;
  `;

  const RedZone = styled.View`
    justify-content: center;
    align-items: center;
    width: 53%;
    background-color: #e26d66;
    height: 30px;
  `;
  const YellowZone = styled.View`
    justify-content: center;
    align-items: center;
    width: 11%;
    background-color: #eca443;
    height: 30px;
    color: ${(props: StyledProps) => props.theme.color.n600};
  `;
  const GreenZone = styled.View`
    justify-content: center;
    align-items: center;
    width: 11%;
    background-color: #40b08f;
    height: 30px;
  `;
  const BlueZone = styled.View`
    justify-content: center;
    align-items: center;
    width: 25%;
    background-color: #3d81bb;
    height: 30px;
  `;
  const GraphContainer = styled.View`
    border-radius: 30px;
    flex-direction: row;
    width: 100%;
    height: 30px;
    justify-content: center;
    align-items: center;
  `;
  const WhiteText = styled.Text`
    font-size: 12px;
    color: ${(props: StyledProps) => props.theme.color.n0};
  `;
  const StandardsContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 28px;
    justify-content: space-between;
    align-items: flex-end;
  `;

  const StandardGrayText = styled.Text`
    color: ${(props: StyledProps) => props.theme.color.n700};
    font-size: 11px;
  `;
  const tempArray = [...new Array(40)];
  const tempArray2 = [...new Array(15)];

  return (
    <Modal
      style={{ flex: 1 }}
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <Modal
        style={{ flex: 1 }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        />
        <ModalBox>
          <ModalContainer>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flex: 9 }}>
                <TitleText>검사 결과는</TitleText>
                <BoldTitleText>한국판 역학연구센터 우울척도</BoldTitleText>
                <BoldTitleText>(CES-D)의 기준을 참고합니다. </BoldTitleText>
              </View>
              <Pressable
                style={{ flex: 1 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <SvgIcon name="x" />
              </Pressable>
            </View>
            <Description style={{ flex: 1.6, lineHeight: 24 }}>
              전반적인 우울증 정도를 알아보기 위한 간이 설문으로, 정확한 진단을
              위해선 반드시 전문의의 상담이 필요해요. 검사 결과는 점수에 따라
              아래와 같이 분류됩니다.
            </Description>
            <View style={{ flex: 0.8 }}>
              <GraphContainer>
                <RedZone>
                  <WhiteText>심각</WhiteText>
                </RedZone>
                <YellowZone>
                  <WhiteText>주의</WhiteText>
                </YellowZone>
                <GreenZone>
                  <WhiteText>보통</WhiteText>
                </GreenZone>
                <BlueZone>
                  <WhiteText>정상</WhiteText>
                </BlueZone>
              </GraphContainer>
              <StandardsContainer>
                <StandardGrayText>0</StandardGrayText>
                {tempArray.map((item, index) => {
                  return <StandardGrayText key={index} />;
                })}
                <StandardGrayText>35</StandardGrayText>
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText>40</StandardGrayText>
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText />
                <StandardGrayText>45</StandardGrayText>
                {tempArray2.map((item, index) => {
                  return <StandardGrayText key={index} />;
                })}
                <StandardGrayText>60</StandardGrayText>
              </StandardsContainer>
            </View>
          </ModalContainer>
        </ModalBox>
      </Modal>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <GrayBG />
      </Pressable>
    </Modal>
  );
};
