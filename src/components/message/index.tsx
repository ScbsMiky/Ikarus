import React from "react";

import { Attachment, Message } from "../../libs/ikarus/types";
import { Container, Header } from "./style";

const AttachmentComponent: React.FC<Attachment> = ({ proxy_url, url }) => {
  return (
    <div className="attachment">
      <img src={proxy_url || url} />
    </div>
  );
};

const MessageComponent: React.FC<Message> = ({ author, content, attachments }) => {
  return (
    <Container>
      <Header>
        <div className="left">
          <img src={author.avatar ? `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`} />
        </div>
        <div className="right">
          <div className="username">
            <span>{author.global_name || author.username}</span>
          </div>
          <div className="content">
            <span>{content}</span>

            {attachments.map((attachment) => <AttachmentComponent key={attachment.id} {...attachment} />)}
          </div>
        </div>
      </Header>
    </Container>
  );
};

export default MessageComponent;