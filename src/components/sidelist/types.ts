import { Channel, Guild, RelationShip, User } from "../../libs/ikarus/types";

export type SideListProps = {
  user: User;
  guild?: Guild;
  boxes: Channel[ ] | RelationShip[ ];
  onSelect(id: string): any;
};