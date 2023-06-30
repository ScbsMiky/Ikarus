import styled from "styled-components";

export const Header = styled.div`
  display: flex;

  .left {
    img {
      width: 2vw;
      height: 2vw;

      border-radius: 100%;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: .5rem;

  .attachment {
    img {
      max-width: 60%;

      width: auto;
      height: auto;
    }
  }
`;