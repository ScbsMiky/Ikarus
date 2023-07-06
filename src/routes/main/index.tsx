import React, { useContext, useState } from "react";

import SideListComponent from "../../components/sidelist";
import ServerListComponent from "../../components/serverlist";
import ChannelContentComponent from "../../components/channelcontent";

import { Container } from "./style";
import { MainRouterProps } from "./types";
import { GlobalIkarus } from "../../global/ikarus";

import { Channel, Guild, RelationShip } from "../../libs/ikarus/types";

const MainRouter: React.FC<MainRouterProps> = ({ }) => {
  const { guilds, relations, user } = useContext(GlobalIkarus);

  const [boxes, setBoxes] = useState<Channel[ ] | RelationShip[ ]>([ ]);

  const [selectedGuild, setSelectedGuild] = useState<Guild>( );
  const [selectedChannel, setSelectedChannel] = useState<Channel>( );

  const selectGuild = (id: string) => {
    const finded = guilds.find((guild) => {
      return guild.id == id;
    });

    if(!finded) return;

    setSelectedGuild(finded);
    setBoxes(finded.channels);
  };

  const selectChannelOrUser = (id: string) => { };

  return (
    <Container>
      <ServerListComponent
        guilds={guilds}
        onSelect={selectGuild}
      />
      
      <SideListComponent
        user={user}
        boxes={boxes}
        guild={selectedGuild}
        onSelect={selectChannelOrUser}
      />

      <ChannelContentComponent
        user={undefined}
        channel={undefined}
        messages={[ ]}
      />
    </Container>
  );
};

export default MainRouter;