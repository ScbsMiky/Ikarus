import { Author, Channel, Guild, User } from "../../libs/ikarus/types";

export type SideListProps = {
  user: User;
  guild?: Guild;
  boxes: Channel[ ] | Author[ ];
  onSelect(id: string): any;
};