import styled from "styled-components/native";
import { ITheme } from "@/types";

interface IContainerProps {
  theme: ITheme;
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
  color: ${(props: IContainerProps) => props.theme.color.n50};
  flex: 1;
  justify-content: center;
  padding: 8%;
  width: 100%;
  height: 100%;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  justify-content: ${(props: Props) => props.center && "center"};
  align-items: ${(props: Props) => props.alignCenter && "center"};
`;

export default Layout;
