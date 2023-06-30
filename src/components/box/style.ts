import styled from "styled-components";

export const Icon = styled.div`
  img {
    margin-left: .5rem;

    width: 4vh;
    height: 4vh;

    border-radius: 100%;
  }

  svg {
    margin-left: .5rem;

    width: 1.2rem;
    height: 1.2rem;
  }
`;

export const Text = styled.div`
  display: block;

  margin-left: .5rem;

  & > * {
    display: block;
  }
`;

export const Button = styled.div``;

export const Buttons = styled.div``;

export const Container = styled.div`
  width: 100%;
  height: 7vh;

  display: flex;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`;