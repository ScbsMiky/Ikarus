
export type FormComponentInput = {
  id: string;
  name: string;
  type: string;

  content: any;
};

export type FormComponentProps = {
  children: JSX.Element | JSX.Element[ ];

  onSubmit(inputs: FormComponentInput[ ]): any;
};