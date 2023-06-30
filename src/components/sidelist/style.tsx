import styled from "styled-components";

export const Container = styled.div`
  width: 18vw;
  height: 100;

  background: ${({ theme }) => theme.lists.side.background};

  overflow: auto;
  
  & > div:nth-child(1) {
    background: ${({ theme }) => theme.lists.side.header};
  }

  & > div:nth-child(3) {
    background: ${({ theme }) => theme.lists.side.footer};
  }
`;