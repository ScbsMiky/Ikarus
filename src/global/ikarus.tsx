import { createContext } from "react";

import { Guild, RelationShip, User } from "../libs/ikarus/types";

export const GlobalIkarus = createContext<{ user: User, guilds: Guild[ ], relations: RelationShip[ ] }>({
  user: { } as User,
  guilds: [ ],
  relations: [ ],
});