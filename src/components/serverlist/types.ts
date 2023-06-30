export type ServerListGuild = {
  id: string;
  name: string;
  icon: string;
};

export type ServerListProps = {
  guilds: ServerListGuild[ ];

  onSelect(guildID: string): any;
};