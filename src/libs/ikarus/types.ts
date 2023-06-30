export const ChannelTypes = {
  Text: 0
};

export type RelationShip = {
  type: number;
  flags: number;
  
  is_spam: boolean;
  
  id: string;
  name: string;
  owner_id: string;
  last_message_id: string;

  recipients: Recipient[ ];
};

export type Recipient = {
  id: string;
  avatar: string;
  username: string;
  global_name: string;
  discriminator: string;

  avatar_decorator: null | string;

  public_flags: number;
};

export type User = {
  avatar: null | string;
  banner: null | string;
  username :  null | string
  banner_color: null | string;
  avatar_decoration: null | string;

  id: string;
  bio: string;
  email: string;
  phone: string
  pronouns: string
  global_name: string;
  discriminator: string;

  mobile: boolean;
  premium: boolean;
  verified: boolean;
  desktop:  boolean;
  mfa_enabled: boolean;
  nsfw_allowed: boolean;

  flags: number;
  premium_type: number;
  public_flags: number;
  accent_color: number;
  purchased_flags: number;
};

export type Author = {
  id: string;
  avatar: string;
  username: string;
  global_name: string;
  discriminator: string;

  avatar_decorator: null | string;

  public_flags: number;
};

export type Member = {
  joined_at: string;
  roles: string[ ];

  nick: null | string;
  avatar: null | string;

  flags: number;

  deaf: boolean;
  mute: boolean;
  pending: boolean;
};

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner_id: string;
  joined_at: string;

  features: string[ ];

  roles: Role[ ];
  emojis: Emoji[ ];
  channels: Channel[ ];
};

export type Emoji = {
  version: number;

  id: string;
  name: string;

  managed: boolean;
  animated: boolean;
  available: boolean;
  require_colons: boolean
};

export type Channel = {
  type: number;
  flags: number;
  version: number;
  position: number;
  rate_limit_per_user: number;

  topic: null | string;

  nsfw: boolean;

  id: string;
  name: string;
  parent_id: string;
  last_message_id: string;
  last_pin_timestamp: string;

  permissions_overwrites: PermissionOverwrite[ ];
};

export type PermissionOverwrite = {
  type: number;

  id: string;
  deny: string;
  allow: string;
};

export type Message = {
  id: string;
  nonce: string;
  content: string;
  guild_id: string;
  timestamp: string;
  channel_id: string;
  
  mention_roles: string[ ];

  edited_timestamp: null | string;

  tts: boolean;
  pinned: boolean;
  
  type: number;
  flags: number;

  author: Author;
  member: Member;
  mentions: Mention[ ];
  attachments: Attachment[ ];
};

export type Mention = {
  id: string;
  avatar: string;
  username: string;
  global_name: string;
  discriminator: string;

  avatar_decorator: null | string;

  public_flags: number;
};

export type Attachment = {
  id: string;
  url: string;
  filename: string;
  proxy_url: string;
  content_type: string;

  size: number;
  width: number;
  height: number;
};

export type Role = {
  color: number;
  flags: number;
  version: number;
  position: number;

  icon: null | string;

  mentionable: boolean;
  
  id: string;
  name: string;
  permissions: string;
};