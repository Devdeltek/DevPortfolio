import { globalCss, css } from '@pigment-css/react';

globalCss`
  body {
    background-color: ${({ theme }) => theme.colorSchemes.light.colors.background};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0px;
    padding: 0px;
    opacity: 0.8;
    font-family: ${({theme}) => theme.typography.fontFamily};
    font-size: 1em;
  }

  main {
    margin-left: ${({ theme }) => theme.spacing.pageMarginsFull}vw;
    margin-right: ${({ theme }) => theme.spacing.pageMarginsFull}vw;
    flex: 1;
    padding: ${({ theme }) => theme.spacing.horizontalSpacing}px;
  }

  h1 {
    font-size: 2em;
    text-align: center;
  }

  header {
    display: flex;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colorSchemes.light.colors.component};
  }

  footer {
    display: flex;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colorSchemes.light.colors.component};
    min-height: 50px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  img {
    padding: 10px;
  }

  a {
    text-decoration: none;
    margin: 5px;
    padding: 5px;
    color: ${({ theme }) => theme.colorSchemes.light.colors.link};
  }

  a:hover {
    color: ${({ theme }) => theme.colorSchemes.light.colors.hover};
  }

  @media screen and (max-width: 900px){
    main{
      margin-left: ${({ theme }) => theme.spacing.pageMarginsSmall}vw;
      margin-right:${({ theme }) => theme.spacing.pageMarginsSmall}vw;
    }
  }
`;