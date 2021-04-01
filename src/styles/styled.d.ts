import 'styled-components';

declare module 'styled-components' {
  export interface DefautTheme {
    title: string;

    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
    },
    colors: {
      primary: string;
      secondary: string;
      mainBg: string;
      white: string;
      black: string;
      lightGray: string;
      gray: string;
      darkGray: string;
    }
  };
}
