import styled from "styled-components";

export const Guild = styled.div`
  position: relative;

  width: 4vw;
  height: 4vw;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 70%;

    border-radius: 100%;
  }

  &:hover::after {
    height: 25%;
  }

  &[data-selected=true]::after {
    height: 50%;
  }

  &::after {
    content: "";

    position: absolute;

    width: .24rem;
    height: .4rem;

    left: 0;
    top: 50%;

    transform: translateY(-50%);

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    background: ${({ theme }) => theme.lists.server.selection};

    transition: all .5s;
  }
`;

export const Container = styled.div`
  width: 4vw;
  height: 100%;

  background: ${({ theme }) => theme.lists.server.background};

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;