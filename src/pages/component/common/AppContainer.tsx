import { Container } from '@chakra-ui/react';

const AppContainer = ({ children }: any) => {
  return (
    <Container maxW='container.xl'>
      {children}
    </Container>
  );
};

export default AppContainer;
