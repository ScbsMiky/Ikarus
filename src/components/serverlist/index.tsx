import React, { useState } from "react";

import { ServerListProps } from "./types";
import { Container, Guild } from "./style";

const ServerListComponent: React.FC<ServerListProps> = ({ guilds, onSelect }) => {
  const [selected, setSelected] = useState("");

  const selectGuild = (guildID: string) => {
    onSelect(guildID);
    setSelected(guildID);
  };

  return (
    <Container>
      {guilds.map(({ id, name, icon }) => {
        return (
          <Guild key={id} onClick={( ) => selectGuild(id)} data-name={name} data-selected={id == selected}>
            <img src={`https://cdn.discordapp.com/icons/${id}/${icon}.webp`} />
          </Guild>
        );
      })}
    </Container>
  );
};

export default ServerListComponent;