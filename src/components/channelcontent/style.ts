import styled from "styled-components";

export const MessageContainer = styled.div`
  
`;

export const Container = styled.div`
  width: 88vw;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.lists.channel.background};

  & > div:nth-child(1) {
    background: ${({ theme }) => theme.lists.channel.header};
  }
  
  & > div:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      align-items: center;
      
      padding: .25rem 1rem;
      
      margin: 0 auto;
      border-radius: 1rem;

      background: ${({ theme }) => theme.lists.channel.footer};

      svg {
        width: 1.7rem;
        height: 1.7rem;
      }

      textarea {
        width: 70vw;
        height: 100%;

        max-height: 40vh;

        margin: 0 .5rem;

        color: #ffffff;

        border: none;
        background: none;
      }

      div {
        display: flex;
        align-items: center;
      }
    }
  }
`;