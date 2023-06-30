export type TextAreaComponentProps = {
  value?: string;
  timeout?: number;
  onChange?: (content: string, textarea: HTMLTextAreaElement) => any;
};