import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    lists: {
      server: {
        selection: string;
        background: string;
      },
      side: {
        header: string;
        footer: string;
        background: string;
      },
      channel: {
        header: string;
        footer: string;
        background: string;
      }
    }
  }
}