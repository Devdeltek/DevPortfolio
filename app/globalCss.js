import { globalCss, css } from '@pigment-css/react';

globalCss`
  html {
    scroll-padding-top: 100px;
  }

  body {
    background-color: ${({ theme }) => theme.colorSchemes.light.colors.background};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: ${({theme}) => theme.typography.fontSize.medium};
  }

  main {
    margin-left: ${({ theme }) => theme.spacing.pageMarginsFull};
    margin-right: ${({ theme }) => theme.spacing.pageMarginsFull};
    padding: ${({ theme }) => theme.spacing.buffer};
    flex: 1;
  }

  h1 {
    font-size: ${({theme}) => theme.typography.fontSize.title};
    Margin: ${({theme}) => theme.spacing.buffer};
    text-align: center;
  }

  h2 {
    font-size: ${({theme}) => theme.typography.fontSize.extraLarge};
    Margin: ${({theme}) => theme.spacing.buffer};
  }

  h3 {
    font-size: ${({theme}) => theme.typography.fontSize.Large};
    Margin: ${({theme}) => theme.spacing.buffer};
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  article {
    background-color: ${({ theme }) => theme.colorSchemes.light.colors.forground};
    border-radius: ${({ theme }) => theme.spacing.curveRadius};
    padding: ${({ theme }) => theme.spacing.buffer};
  }

  img {
    padding: ${({ theme }) => theme.spacing.bufferSmall};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colorSchemes.light.colors.link};
  }

  a:hover {
    color: ${({ theme }) => theme.colorSchemes.light.colors.hover};
  }

  @media screen and (max-width: 900px){
    main{
      margin-left: ${({ theme }) => theme.spacing.pageMarginsSmall};
      margin-right:${({ theme }) => theme.spacing.pageMarginsSmall};
    }
  }
`;