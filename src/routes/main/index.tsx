import React, { useContext, useState } from "react";

import SideListComponent from "../../components/sidelist";
import ServerListComponent from "../../components/serverlist";
import ChannelContentComponent from "../../components/channelcontent";

import { Container } from "./style";
import { MainRouterProps } from "./types";
import { GlobalIkarus } from "../../global/ikarus";
import { Author, Channel, ChannelTypes, Guild, Message } from "../../libs/ikarus/types";

const MainRouter: React.FC<MainRouterProps> = ({ }) => {
  const ikarus = useContext(GlobalIkarus);

  const [guild, setGuild] = useState<Guild>( );
  const [channel, setChannel] = useState<Channel>( );
  const [channels, setChannels] = useState<Channel[ ]>([ ]);
  
  const [messages, setMessages] = useState<Message[ ]>([ ]);

  const requestMessage = async (from: string) => {
    return fetch(`https://discord.com/api/v9/channels/${from}/messages?limit=50`, { headers: { Authorization: ikarus.token } })
      .then((response) => response.json( ))
      .then((data) => {
        if(data.length) {
          setMessages(data);
        } else {
          setMessages([ ]);
        };
      });
  };

  const handleGuild = (guildID: string) => {
    const finded = ikarus.guilds.find((guild) => guild.id == guildID);

    if(finded) {
      const firstTextChannel = finded.channels.find((channel) => channel.type == ChannelTypes.Text);

      
      setGuild(finded);
      setChannels(finded.channels);
      
      if(firstTextChannel) {
        setChannel(firstTextChannel);
        requestMessage(firstTextChannel.id);
      } else {
        setChannel(undefined);
        setMessages([ ]);
      };
    };
  };

  const handleSelect = (id: string) => {
    if(!guild) {
      return;
    };
    
    const finded = guild.channels.find((channel) => channel.type == ChannelTypes.Text && channel.id == id);

    if(finded) {
      setChannel(finded);
      requestMessage(finded.id);
    } else {
      setChannel(undefined);
      setMessages([ ]);
    };
  };

  return (
    <Container>
      <ServerListComponent guilds={ikarus.guilds} onSelect={handleGuild} />
      
      <SideListComponent
        user={ikarus.user}
        guild={guild}
        onSelect={handleSelect}
        boxes={
          guild
          ? channels
          : ikarus.relations.map(({ id, name, recipients: [recipient] }) => ({...(recipient || { global_name: name }), key: id }) as Author)
        }
      />

      <ChannelContentComponent channel={channel} user={ikarus.user} messages={messages} />
    </Container>
  );
};

export default MainRouter;