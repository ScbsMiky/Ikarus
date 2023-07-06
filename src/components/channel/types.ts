export type ChannelComponentProps = {
  name: string;
  icon: JSX.Element;
  onSelected( ): any;
};

export type ChannelComponentAlternative = {
  AppropriateChannel: React.FC<{ type: number, name: string, onSelected( ): any }>;
};