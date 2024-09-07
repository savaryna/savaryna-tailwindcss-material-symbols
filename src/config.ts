import type { Config } from 'tailwindcss/types/config';

export type MaterialSymbols = {
  font: {
    DEFAULT: string;
    outlined?: string;
    rounded?: string;
    sharp?: string;
  };
  weight: {
    100?: string;
    200?: string;
    300?: string;
    DEFAULT: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
  };
  fill: {
    DEFAULT: string;
    nofill?: string;
    filled?: string;
  };
  grade: {
    dark?: string;
    DEFAULT: string;
    normal?: string;
    emphasis?: string;
  };
  opticalSize: {
    20?: string;
    DEFAULT: string;
    24?: string;
    40?: string;
    48?: string;
  };
};

const config: Partial<Config> & {
  theme: { materialSymbols: Partial<MaterialSymbols> };
} = {
  theme: {
    materialSymbols: {
      font: {
        DEFAULT: "'Material Symbols Outlined'",
        outlined: "'Material Symbols Outlined'",
        rounded: "'Material Symbols Rounded'",
        sharp: "'Material Symbols Sharp'",
      },
      weight: {
        100: '100',
        200: '200',
        300: '300',
        DEFAULT: '400',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      fill: {
        DEFAULT: '0',
        nofill: '0',
        filled: '1',
      },
      grade: {
        dark: '-25',
        DEFAULT: '0',
        normal: '0',
        emphasis: '200',
      },
      opticalSize: {
        20: '20',
        DEFAULT: '24',
        24: '24',
        40: '40',
        48: '48',
      },
    },
  },
};

export default config;

export type MaterialSymbolsConfig = typeof config;
