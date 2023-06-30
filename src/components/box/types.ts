export type BoxComponentProps = {
  name: string;
  description?: string;
  
  icon?: JSX.Element | string;

  buttons?: { icon?: JSX.Element | string, action( ): any }[ ];

  onClick?: ( ) => any;
};