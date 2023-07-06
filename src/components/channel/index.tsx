import { ChannelTypes } from "../../libs/ikarus/types";
import BoxComponent from "../box"
import { ChannelComponentAlternative, ChannelComponentProps } from "./types";

const ChannelComponent: React.FC<ChannelComponentProps> & ChannelComponentAlternative = ({ icon, name, onSelected }) => {
  return (
    <BoxComponent
      name={name}
      icon={icon}
      onClick={onSelected}
    />
  );
};


ChannelComponent.AppropriateChannel = ({ type, name, onSelected }) => {
  switch(type) {
    case ChannelTypes.GUILD_FORUM: return <ChannelComponent icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" /></svg>} name={name} onSelected={onSelected} />;
    case ChannelTypes.GUILD_VOICE: return <ChannelComponent icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg>} name={name} onSelected={onSelected} />;
    case ChannelTypes.GUILD_CATEGORY: return <ChannelComponent icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>} name={name} onSelected={onSelected} />;
    case ChannelTypes.GUILD_ANNOUNCEMENT: return <ChannelComponent icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M20 2V4L4 8V6H2V18H4V16L6 16.5V18.5C6 20.4 7.6 22 9.5 22S13 20.4 13 18.5V18.3L20 20V22H22V2H20M11 18.5C11 19.3 10.3 20 9.5 20S8 19.3 8 18.5V17L11 17.8V18.5Z" /></svg>} name={name} onSelected={onSelected} />;
    default: return <ChannelComponent icon={<svg viewBox="0 0 24 24"><path fill="currentColor" d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z" /></svg>} name={name} onSelected={onSelected} />;
  };
};

export default ChannelComponent;