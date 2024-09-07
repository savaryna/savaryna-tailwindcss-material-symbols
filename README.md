# @savaryna/tailwindcss-material-symbols

🌀 A simple tailwindcss plugin to ease work with Google's [Material Symbols](https://fonts.google.com/icons) icons.

## Installation

Install the plugin using `npm`

```shell
npm i -D @savaryna/tailwindcss-material-symbols
```

or `pnpm`

```shell
pnpm add -D @savaryna/tailwindcss-material-symbols
```

Add the plugin to your `tailwind.config.js` file

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@savaryna/tailwindcss-material-symbols'),
    // ...
  ],
};
```

## Basic usage

Now you can use the base class `icon` to style elements as Material Symbols.

> [!TIP]
> The base class can be changed by passing a `baseClass` option to the plugin. In that case use your custom base class instead of `icon`. See [changing the default base class](#changing-the-default-base-class) for more information.

```html
<span class="icon">favorite</span>
```

### Choosing a style

The plugin includes a modifier class for each Material Symbols font family, so you can easily choose what symbol style to use.

> [!IMPORTANT]
> All modifier classes need to be used together with the base class. Always include the base class when using a modifier class.

```html
<span class="icon icon-rounded">favorite</span>
<!-- `icon` is the base class, and          -->
<!-- `icon-rounded` is the modifier class   -->
```

Here you can see how the base class `icon` was used together with the `icon-rounded` modifier which sets the font family to the Rounded variant.

Classes you can use with the default config:

| Class                       | Font family                 |
| --------------------------- | --------------------------- |
| `icon-outlined` _(default)_ | 'Material Symbols Outlined' |
| `icon-rounded`              | 'Material Symbols Rounded'  |
| `icon-sharp`                | 'Material Symbols Sharp'    |

### Choosing a weight

Weight modifiers allow you to adjust the weight of the symbols stroke. Read more [here](https://developers.google.com/fonts/docs/material_symbols#wght_axis).

```html
<span class="icon icon-700">favorite</span>
```

Classes you can use with the default config:

| Class                  | Font weight |
| ---------------------- | ----------- |
| `icon-100`             | 100         |
| `icon-200`             | 200         |
| `icon-300`             | 300         |
| `icon-400` _(default)_ | 400         |
| `icon-500`             | 500         |
| `icon-600`             | 600         |
| `icon-700`             | 700         |

These can be animated using transitions.

```html
<span class="icon hover:icon-700 transition-all">favorite</span>
```

### Choosing a fill

Fill modifiers allow you to choose if your symbol is filled or not. Read more [here](https://developers.google.com/fonts/docs/material_symbols#fill_axis).

Classes you can use with the default config:

| Class                     | Font fill |
| ------------------------- | --------- |
| `icon-nofill` _(default)_ | 0         |
| `icon-filled`             | 1         |

These can be animated using transitions.

```html
<label>
  <input type="checkbox" class="peer hidden" />
  <span class="icon peer:checked:icon-filled transition-all">favorite</span>
</label>
```

### Choosing a grade

Grade modifiers allow you to choose the weight of the symbols in a more granular way. A lower value is recommended to be used on darker backgrounds. Read more [here](https://developers.google.com/fonts/docs/material_symbols#grad_axis).

Classes you can use with the default config:

| Class                     | Font grade |
| ------------------------- | ---------- |
| `icon-dark`               | -25        |
| `icon-normal` _(default)_ | 0          |
| `icon-emphasis`           | 200        |

These can be animated using transitions.

### Choosing an optical size

Optical size modifiers allow you to choose the size of the symbols. In addition to changing the symbol size this also changes the stroke weight as the symbol scales. Read more [here](https://developers.google.com/fonts/docs/material_symbols#opsz_axis).

Classes you can use with the default config:

| Class                 | Font optical size |
| --------------------- | ----------------- |
| `icon-20`             | 20                |
| `icon-24` _(default)_ | 24                |
| `icon-40`             | 40                |
| `icon-48`             | 48                |

These can be animated using transitions.

## Customizing the plugin

### Changing the default base class

If you want to use a base class other than `icon`, you can do so using the `baseClass` option when registering the plugin:

```js {{ filename: 'tailwind.config.js' }}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@savaryna/tailwindcss-material-symbols')({
      baseClass: 'symbol',
    }),
  ]
  ...
}
```

Now you can use your custom `symbol` base class where you'd use the default base class:

```html
<span class="symbol symbol-rounded">favorite</span>
```

### Changing the default styles and classes

If you want to customize what modifier classes and values get generated, or change the `DEFAULT`'s you can also extend or override the `materialSymbols` key in your theme config.

```js {{ filename: 'tailwind.config.js' }}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    materialSymbols: {
      weight: {
        DEFAULT: '700',
      },
      opticalSize: {
        sm: '20',
      },
      ...
    }
  },
  plugins: [
    require('@savaryna/tailwindcss-material-symbols'),
  ]
  ...
}
```

[Discuss the Tailwind CSS Material Symbols plugin on GitHub](https://github.com/savaryna/tailwindcss-material-symbols/discussions)
