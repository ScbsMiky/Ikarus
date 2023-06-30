import React from "react";

import { Button, Buttons, Container, Icon, Text } from "./style";
import { BoxComponentProps } from "./types";

const BoxComponent: React.FC<BoxComponentProps> = ({ icon, name, description, buttons, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon>
        {icon ? (typeof icon == "string" ? <img src={icon} /> : icon) : <></>}
      </Icon>

      <Text>
        <span>{name}</span>
        {description ? <span>{description}</span> : <></>}
      </Text>

      <Buttons>
        {
          (buttons && buttons.length)
          ? buttons.map(({ icon, action }) => {
            return (
              <Button onClick={action}>{icon ? (typeof icon == "string" ? <img src={icon} /> : icon) : <></>}</Button>
            );
          })
          : <></>}
      </Buttons>
    </Container>
  );
};

export default BoxComponent;