import createMDX from '@next/mdx'
import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';

// next.config.js
const withMDX = createMDX({
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

const theme = extendTheme({

});

// Merge MDX config with Next.js config
export default withMDX(withPigment(nextConfig, {
  theme: extendTheme({
    colorSchemes: {
      light: {
        colors: {
          background: 'LightGray',
          forground: ' FloralWhite',
          splash: '#5FA061',
          accent: 'CadetBlue',
          text: 'Black',
          link: 'DarkSlateGray',
          hover: 'DarkCyan',
        },
      },
      dark: {
        colors: {
          background: 'DarkOliveGreen',
          article: 'DarkGray',
          component: 'Coral',
          text: 'White',
          link: 'Lavender',
          hover: 'LightCyan',
        },
      },
    },
    getSelector: (colorScheme) => colorScheme ? `.theme-${colorScheme}` : ':root',
    spacing: {
      pageMarginsFull: '20vw',
      pageMarginsSmall: '5vw',
      curveRadius: '10px',
      bufferSmall: '0.1em',
      buffer: '0.5em',
      bufferLarge: '1em'
    },
    typography: {
      fontFamily: 'Arial',
      fontSize: {
        small: '.75em',
        medium: '1em',
        large: '1.25em',
        extraLarge: '1.5em',
        title: '2em',
      },
    },
  }),
}));

// dark/dark:
// header/footer - #3a4426/#458280
// main background - #271110/#dbcfff
// article background - #372413/#75a9dc
// component background - #3a4426/#458280
// text color - white/black
// link color - #dbcfff/#3a3319
// link hover - #a1bcff/#5796ae

// page margin full screen
// page margin small screen

// Horizantal spacing between elements
// Vertical spacing between elements

// font
// font sizes for mobile and web
// small font size - subscripts
// medium font size - normal text
// large font size - h3, titles in cards
// extra large font size - h2
// title font size - h1