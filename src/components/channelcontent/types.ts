import { Channel, Message, User } from "../../libs/ikarus/types";

export type ChannelContentProps = {
  user?: User;
  channel?: Channel;
  messages: Message[ ];
};