import { createStitches } from '@stitches/react';

export const { styled, css, keyframes, getCssText, theme, globalCss } =
  createStitches({
    theme: {
      colors: {
        // Backgrounds
        bg: '#FFFFFF',
        bgHover1: '#211922',

        // General
        white: '#FFFFFF',
        gray1: '#E9E9E9',
        gray2: '#E1E1E1',
        black: '#111111',
        red: '#E60023',

        // Texts
        txtWhite: '#F4F4F4',
        gray3: '#333',
      },
    },
    media: {
      xs: '(max-width: 320px)',
      sm: '(min-width: 321px) and (max-width: 768px)',
      md: '(min-width: 769px) and (max-width: 1024px)',
      lg: '(min-width: 1025px) and (max-width: 1440px)',
      xl: '(min-width: 1441px)',
      min_sm: '(min-width: 321px)',
      max_sm: '(max-width: 768px)',
      min_md: '(min-width: 769px)',
      max_md: '(max-width: 1024px)',
      min_lg: '(min-width: 1025px)',
      max_lg: '(max-width: 1440px)',
    },
  });
