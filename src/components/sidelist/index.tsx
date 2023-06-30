import React from "react";

import { Container } from "./style";
import { SideListProps } from "./types";
import ContentComponent from "../content";
import BoxComponent from "../box";
import { Author, Channel } from "../../libs/ikarus/types";

const SideListComponent: React.FC<SideListProps> = ({ user, guild, boxes, onSelect }) => {
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
            guild
            ? (boxes as Channel[ ]).map((box) => (<BoxComponent key={box.id} onClick={( ) => onSelect(box.id)} name={box.name} icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>} />))
            : (boxes as (Author & { key: string })[ ]).map((box) => (<BoxComponent key={box.key} onClick={( ) => onSelect(box.id)} name={box.global_name || box.username || box.id} icon={box.avatar ? `https://cdn.discordapp.com/avatars/${box.id}/${box.avatar}.webp` : `https://cdn.discordapp.com/embed/avatars/1.png`} />))
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