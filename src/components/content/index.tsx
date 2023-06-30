import React from "react";

import { Child, Components } from "./types";
import { Container, Footer, Header } from "./style";

const ContentComponent: React.FC<Child> & Components = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

ContentComponent.Header = ({ children }) => {
  return (
    <Header>
      {children}
    </Header>
  );
};

ContentComponent.Footer = ({ children }) => {
  return (
    <Footer>
      {children}
    </Footer>
  );
};

export default ContentComponent;