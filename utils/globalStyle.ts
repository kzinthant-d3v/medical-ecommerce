import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const heading = (size: string): string => {
  return `
        text-align: center;
        font-weight: bold;
        line-height: 1em;
        font-size: ${size};
    `;
};

interface themeType extends DefaultTheme {
  text: 'string';
  body: 'string';
  'font-size-xl': 'string';
  'font-size-lg': 'string';
  'font-size-md': 'string';
  'font-size-sm': 'string';
}
export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `{
        h1 {
            ${heading((theme as themeType)['font-size-xl'])}
            color: ${(theme as themeType).text};
        }
        h2 {
            ${heading((theme as themeType)['font-size-lg'])}
            color: ${(theme as themeType).text};
        }
        h3 {
            ${heading((theme as themeType)['font-size-md'])}
        }
        h4 {
            ${heading((theme as themeType)['font-size-sm'])}
        }
        body {
            background: ${(theme as themeType).body};
            color: ${(theme as themeType).text};
            transition: all 0.50s linear;
          }
        label {
            color: ${(theme as themeType).text} !important;
        }
    `}
`;
