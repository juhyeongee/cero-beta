import styled from "styled-components/native";
import { View, SafeAreaView } from "react-native";
import { ITheme } from "../../styled";

interface IContainerProps {
  theme?: ITheme;
}

interface Props {
  center?: boolean;
  alignCenter?: boolean;
  children: React.ReactNode;
}

const Layout = ({ center, alignCenter, children }: Props) => {
  let centered = center === true;

  return (
    <Container>
      <SafeArea center={center} alignCenter={alignCenter}>
        {children}
      </SafeArea>
    </Container>
  );
};

const Container = styled.View`
  color: ${(props: IContainerProps) => props.theme?.color.n50};
  flex: 1;
  justify-content: center;
  padding: 32px;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: ${(props: Props) => props.center && "center"};
  align-items: ${(props: Props) => props.alignCenter && "center"};
`;

export default Layout;
