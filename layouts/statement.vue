<style>
  h1 {
    background: #3f51b5;
    border-radius: 1rem;
    box-shadow: 0px 0px 0.5rem 0px #000000;
    color: white;
    margin: 1.5rem 0 2rem 0;
    padding: 1rem 0;
    text-align: center;
    display: block;
  }

  h2 {
    --border: #dddddd;
    --text-light: #666666;
    --text: #333333;
    --primary: #009af7;
    --primary-light: #e5f5fe;
    --primary-light-bg: #f2faff;
    --primary-light-bg-dm: #192837;
    --primary-light-dm: #153a55;
    --primary-hover: #3398ff;
    --primary-pressed: #66b2ff;
    --secondary: #66c2fa;
    --secondary-dm: #0a6aa6;
    --tg-background: #1a222d;
    --tg-background-2: #242f3e;
    --tg-stroke: #3b4655;
    --success: #00b872;
    --success-light-bg: #f2fbf8;
    --success-light-bg-dm: #192a30;
    --error: #ff2749;
    --error-light: #fff4f6;
    --error-light-hover: #ffdfe5;
    --error-light-pressed: #ffcbd3;
    --error-light-dm: #482333;
    --error-light-dm-hover: #5a2335;
    --error-light-dm-pressed: #6d2437;
    --grayscale-secondary1: #68687b;
    --grayscale-bg-darker: #f3f4f7;
    --tg-secondary: #c1c3c7;
    --grayscale-tetriary2: #d0d0d7;
    --black: #111111;
    --white: #ffffff;
    --primary2: #43434e;
    --grayscale-gs-background-darker: #f3f4f7;
    --grayscale-gs-quarterly-1: #dfdfe4;
    --bacground: #f5f5f5;
    --bacground-dark: #282828;
    --size-extraTiny: 2px;
    --size-tiny: 4px;
    --size-extraSmall: 6px;
    --size-small: 8px;
    --size-medium: 12px;
    --size-normal: 24px;
    --size-large: 32px;
    --size-xLarge: 48px;
    --size-xxLarge: 56px;
    --size-extraLarge: 64px;
    --font-size-tiny: 12px;
    --font-size-small: 16px;
    --font-size-medium: 18px;
    --font-size-large: 32px;
    --weight-thin: 100;
    --weight-extraLight: 200;
    --weight-light: 300;
    --weight-normal: 400;
    --weight-medium: 500;
    --weight-semiBold: 600;
    --weight-bold: 700;
    --weight-extraBold: 800;
    font-family:
      JetBrains Mono,
      Noto Sans SC,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Noto Color Emoji',
      system-ui,
      -apple-system,
      emoji,
      monospace;
    font-feature-settings:
      'liga' off,
      'calt' off !important;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    color: var(--primary);
    font-size: 1.5rem;
  }

  article {
    --border: #dddddd;
    --text-light: #666666;
    --text: #333333;
    --primary: #009af7;
    --primary-light: #e5f5fe;
    --primary-light-bg: #f2faff;
    --primary-light-bg-dm: #192837;
    --primary-light-dm: #153a55;
    --primary-hover: #3398ff;
    --primary-pressed: #66b2ff;
    --secondary: #66c2fa;
    --secondary-dm: #0a6aa6;
    --tg-background: #1a222d;
    --tg-background-2: #242f3e;
    --tg-stroke: #3b4655;
    --success: #00b872;
    --success-light-bg: #f2fbf8;
    --success-light-bg-dm: #192a30;
    --error: #ff2749;
    --error-light: #fff4f6;
    --error-light-hover: #ffdfe5;
    --error-light-pressed: #ffcbd3;
    --error-light-dm: #482333;
    --error-light-dm-hover: #5a2335;
    --error-light-dm-pressed: #6d2437;
    --grayscale-secondary1: #68687b;
    --grayscale-bg-darker: #f3f4f7;
    --tg-secondary: #c1c3c7;
    --grayscale-tetriary2: #d0d0d7;
    --black: #111111;
    --white: #ffffff;
    --primary2: #43434e;
    --grayscale-gs-background-darker: #f3f4f7;
    --grayscale-gs-quarterly-1: #dfdfe4;
    --bacground: #f5f5f5;
    --bacground-dark: #282828;
    --size-extraTiny: 2px;
    --size-tiny: 4px;
    --size-extraSmall: 6px;
    --size-small: 8px;
    --size-medium: 12px;
    --size-normal: 24px;
    --size-large: 32px;
    --size-xLarge: 48px;
    --size-xxLarge: 56px;
    --size-extraLarge: 64px;
    --font-size-tiny: 12px;
    --font-size-small: 16px;
    --font-size-medium: 18px;
    --font-size-large: 32px;
    --weight-thin: 100;
    --weight-extraLight: 200;
    --weight-light: 300;
    --weight-normal: 400;
    --weight-medium: 500;
    --weight-semiBold: 600;
    --weight-bold: 700;
    --weight-extraBold: 800;
    font-family:
      JetBrains Mono,
      Noto Sans SC,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Noto Color Emoji',
      system-ui,
      -apple-system,
      emoji,
      monospace;
    font-feature-settings:
      'liga' off,
      'calt' off !important;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    border-radius: 1rem;
    box-shadow: 0px 0px 0.5rem 0px #000000;
    padding: 1rem 2rem;
    position: relative;
    overflow: hidden;
  }

  .subtitle {
    --border: #dddddd;
    --text-light: #666666;
    --text: #333333;
    --primary: #009af7;
    --primary-light: #e5f5fe;
    --primary-light-bg: #f2faff;
    --primary-light-bg-dm: #192837;
    --primary-light-dm: #153a55;
    --primary-hover: #3398ff;
    --primary-pressed: #66b2ff;
    --secondary: #66c2fa;
    --secondary-dm: #0a6aa6;
    --tg-background: #1a222d;
    --tg-background-2: #242f3e;
    --tg-stroke: #3b4655;
    --success: #00b872;
    --success-light-bg: #f2fbf8;
    --success-light-bg-dm: #192a30;
    --error: #ff2749;
    --error-light: #fff4f6;
    --error-light-hover: #ffdfe5;
    --error-light-pressed: #ffcbd3;
    --error-light-dm: #482333;
    --error-light-dm-hover: #5a2335;
    --error-light-dm-pressed: #6d2437;
    --grayscale-secondary1: #68687b;
    --grayscale-bg-darker: #f3f4f7;
    --tg-secondary: #c1c3c7;
    --grayscale-tetriary2: #d0d0d7;
    --black: #111111;
    --white: #ffffff;
    --primary2: #43434e;
    --grayscale-gs-background-darker: #f3f4f7;
    --grayscale-gs-quarterly-1: #dfdfe4;
    --bacground: #f5f5f5;
    --bacground-dark: #282828;
    --size-extraTiny: 2px;
    --size-tiny: 4px;
    --size-extraSmall: 6px;
    --size-small: 8px;
    --size-medium: 12px;
    --size-normal: 24px;
    --size-large: 32px;
    --size-xLarge: 48px;
    --size-xxLarge: 56px;
    --size-extraLarge: 64px;
    --font-size-tiny: 12px;
    --font-size-small: 16px;
    --font-size-medium: 18px;
    --font-size-large: 32px;
    --weight-thin: 100;
    --weight-extraLight: 200;
    --weight-light: 300;
    --weight-normal: 400;
    --weight-medium: 500;
    --weight-semiBold: 600;
    --weight-bold: 700;
    --weight-extraBold: 800;
    color: white;
    text-align: center;
    font-family:
      JetBrains Mono,
      Noto Sans SC,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Noto Color Emoji',
      system-ui,
      -apple-system,
      emoji,
      monospace;
    font-feature-settings:
      'liga' off,
      'calt' off !important;
    -webkit-font-smoothing: antialiased !important;
    text-rendering: optimizeLegibility !important;
    font-size: 1.5rem;
    margin: 0;
  }
</style>

<template>
  <router-view />
  <BackToTop />
</template>
