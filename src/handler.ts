import type { PluginCreator } from 'tailwindcss/types/config';
import type { MaterialSymbols } from './config';

export type Options = {
  baseClass?: string;
};

const filterDefaultKey = <T extends Record<string, any>>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).filter(([key]) => key !== 'DEFAULT'),
  ) as Omit<T, 'DEFAULT'>;

export default ({ baseClass = 'icon' }: Options = {}): PluginCreator =>
  ({ theme, e, addComponents, matchUtilities }) => {
    const escapedBaseClass = e(baseClass);
    const materialSymbols = theme('materialSymbols') as MaterialSymbols;

    addComponents({
      [`.${escapedBaseClass}`]: {
        fontFamily: materialSymbols.font.DEFAULT,
        'font-weight': materialSymbols.weight.DEFAULT,
        'font-style': 'normal',
        'font-size': `${materialSymbols.opticalSize.DEFAULT}px`,
        'line-height': '1',
        'letter-spacing': 'normal',
        'text-transform': 'none',
        display: 'inline-block',
        'white-space': 'nowrap',
        'word-wrap': 'normal',
        direction: 'ltr',
        '-webkit-font-feature-settings': 'liga',
        '-webkit-font-smoothing': 'antialiased',
        'font-variation-settings': `
          "wght" var(--weight, ${materialSymbols.weight.DEFAULT}),
          "FILL" var(--fill, ${materialSymbols.fill.DEFAULT}),
          "GRAD" var(--grade, ${materialSymbols.grade.DEFAULT}),
          "opsz" var(--opticalSize, ${materialSymbols.opticalSize.DEFAULT})
        `,
      },
    });

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          fontFamily: value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.font) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--weight': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.weight) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--fill': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.fill) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          '--grade': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.grade) },
    );

    matchUtilities(
      {
        [escapedBaseClass]: (value) => ({
          fontSize: `${value}px`,
          '--opticalSize': value,
        }),
      },
      { values: filterDefaultKey(materialSymbols.opticalSize) },
    );
  };
