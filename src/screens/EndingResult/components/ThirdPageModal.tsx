import { View, Text, Pressable, Modal } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "@/types";

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
    border-radius: 40px;
    padding: 16% 8%;
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
            <TitleText>검사 결과는</TitleText>
            <BoldTitleText>한국판 역학연구센터 우울척도</BoldTitleText>
            <BoldTitleText>(CES-D)의 기준을 참고합니다. </BoldTitleText>
            <Description>
              전반적인 우울증 정도를 알아보기 위한 간이 설문으로, 정확한 진단을
              위해선 반드시 전문의의 상담이 필요해요.
            </Description>
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
