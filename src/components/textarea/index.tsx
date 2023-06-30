import React, { useState } from "react";

import { Container } from "./style";
import { TextAreaComponentProps } from "./types";

const TextAreaComponent: React.FC<TextAreaComponentProps> = ({ value, timeout, onChange }) => {
  const [text, setText] = useState(value || "");
  const [writeTimeout, setWriteTimeout] = useState(timeout || 100);

  const writeHandle = (target: HTMLTextAreaElement) => {
    setText(target.value);

    target.style.height = `0`;
    target.style.height = `${target.scrollHeight}px`;

    clearTimeout(writeTimeout);

    setWriteTimeout(setTimeout(() => {
      if(typeof onChange == "function") {
        onChange(target.value, target);
      };
    }, timeout));
  };

  return (
    <Container value={text} onInput={(event) => writeHandle(event.target as HTMLTextAreaElement)}></Container>
  );
};

export default TextAreaComponent;