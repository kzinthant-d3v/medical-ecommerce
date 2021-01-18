import { createGlobalStyle } from 'styled-components';

export const heading = (size: string): string => {
  return `
        text-align: center;
        font-weight: bold;
        line-height: 1em;
        font-size: ${size};
    `;
};

export const GlobalStyle = createGlobalStyle`
    ${({ theme }) => `{
        h1 {
            ${heading(theme['font-size-xl'])}
            color: ${theme.text};
        }
        h2 {
            ${heading(theme['font-size-lg'])}
            color: ${theme.text};
        }
        h3 {
            ${heading(theme['font-size-md'])}
        }
        h4 {
            ${heading(theme['font-size-sm'])}
        }
        body {
            background: ${theme.body};
            color: ${theme.text};
            transition: all 0.50s linear;
          }
        label {
            color: ${theme.text} !important;
        }
    `}
`;
