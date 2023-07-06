import React from "react";

import { Container } from "./style";
import { SideListProps } from "./types";
import ContentComponent from "../content";
import BoxComponent from "../box";
import { Channel, RelationShip } from "../../libs/ikarus/types";
import ChannelComponent from "../channel";

const SideListComponent: React.FC<SideListProps> = ({ user, guild, boxes, onSelect }) => {
  const renderChannels = (channels: Channel[ ]) => {
    return channels.map(({ type, name, id }) => {
      return (
        <ChannelComponent.AppropriateChannel
          key={id}
          type={type}
          name={name}
          onSelected={( ) => onSelect(id)}
        />
      );
    });
  };

  const renderDirectUsers = (relations: RelationShip[ ]) => {
    return relations.map(({ type, id, icon, name, recipients }) => {
      if(type == 3) {
        return (
          <BoxComponent
            key={id}
            name={name || recipients.length ? recipients.map(({ id, username, global_name }) => global_name || username || id).join(", ") : `Sem nome`}
            icon={icon ? `https://cdn.discordapp.com/channel-icons/${id}/${icon}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`}
          />
        );
      };

      return (
        <BoxComponent
          key={id}
          name={recipients[0].global_name || recipients[0].username || recipients[0].id || `Sem nome`}
          icon={recipients[0].avatar ? `https://cdn.discordapp.com/avatars/${recipients[0].id}/${recipients[0].avatar}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`}
        />
      );
    });
  };

  return (
    <Container>
      <ContentComponent.Header>
        {
          guild
          ? <BoxComponent name={guild.name} icon={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp`} />
          : <BoxComponent name="Users" />
        }
      </ContentComponent.Header>

      <ContentComponent>
        <>
          {
            guild ? renderChannels(boxes as Channel[ ]) : renderDirectUsers(boxes as RelationShip[ ])
          }
        </>
      </ContentComponent>

      <ContentComponent.Footer>
        <BoxComponent name={user.global_name || user.username || user.id} icon={user.avatar ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`} />
      </ContentComponent.Footer>
    </Container>
  );
};

export default SideListComponent;