import React from "react";

import { Container } from "./style";
import { FormComponentInput, FormComponentProps } from "./types";

const FormComponent: React.FC<FormComponentProps> = ({ children, onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault( );
    
    const inputs = Array.from(event.currentTarget.querySelectorAll("input"));
    const textareas = Array.from(event.currentTarget.querySelectorAll("textarea"));

    const computedResult: FormComponentInput[ ] = [ ];

    inputs.forEach((input, index) => {
      computedResult.push({
        id: `${input.id || input.name || `input_${index + 1}`}`,
        name: `${input.name || `input_${index + 1}`}`,
        type: input.type,
        content: input.value
      });
    });

    textareas.forEach((textarea, index) => {
      computedResult.push({
        id: `${textarea.id || textarea.name || `textarea_${index + 1}`}`,
        name: `${textarea.name || `textarea_${index + 1}`}`,
        type: "text",
        content: textarea.value
      });
    });

    return onSubmit(computedResult);
  };

  return (
    <Container action="" onSubmit={handleSubmit}>
      {children}
    </Container>
  );
};

export default FormComponent;