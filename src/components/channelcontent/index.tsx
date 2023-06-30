import React from "react";

import BoxComponent from "../box";
import ContentComponent from "../content";
import TextAreaComponent from "../textarea";

import { Container } from "./style";
import { ChannelContentProps } from "./types";
import FormComponent from "../form";
import MessageComponent from "../message";

const ChannelContentComponent: React.FC<ChannelContentProps> = ({ user, channel, messages }) => {
  const handleTextArea = (content: string, ref: HTMLTextAreaElement) => {
    const refContainer = (ref.parentElement?.parentElement?.parentElement) as HTMLDivElement;
    
    const [header, middle, footer] = refContainer.querySelectorAll<HTMLDivElement>("& > div");

    middle.style.height = `${innerHeight - (header.clientHeight + footer.scrollHeight)}px`;
  };

  return (
    <Container>
      <ContentComponent.Header>
        {
          channel
          ? <BoxComponent name={channel.name} icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>} />
          : user
          ? <BoxComponent name={user.global_name || user.username || user.id} icon={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`} />
          : <></>
        }
      </ContentComponent.Header>

      <ContentComponent>
        {messages.map((message) => <MessageComponent key={message.id} {...message} />)}
      </ContentComponent>
      
      <ContentComponent.Footer>
        <FormComponent onSubmit={( ) => { }}>
          <div>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
          </div>

          <TextAreaComponent onChange={handleTextArea} />

          <div>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M10 10.5H7.5V13.5H8.5V12H10V13.7C10 14.4 9.5 15 8.7 15H7.3C6.5 15 6 14.3 6 13.7V10.4C6 9.7 6.5 9 7.3 9H8.6C9.5 9 10 9.7 10 10.3V10.5M13 15H11.5V9H13V15M17.5 10.5H16V11.5H17.5V13H16V15H14.5V9H17.5V10.5Z" /></svg>
            <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M13,9.94L14.06,11L15.12,9.94L16.18,11L17.24,9.94L15.12,7.82L13,9.94M8.88,9.94L9.94,11L11,9.94L8.88,7.82L6.76,9.94L7.82,11L8.88,9.94M12,17.5C14.33,17.5 16.31,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5Z" /></svg>
          </div>
        </FormComponent>
      </ContentComponent.Footer>
    </Container>
  );
};

export default ChannelContentComponent;