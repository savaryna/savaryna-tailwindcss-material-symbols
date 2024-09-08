# @savaryna/tailwindcss-material-symbols

🌀 A simple tailwindcss plugin to ease work with Google's [Material Symbols](https://fonts.google.com/icons) icons.

## Live demo

See [live demo](https://savaryna.github.io/tailwindcss-material-symbols/index.html) on how the plugin works.

## Installation

Install the plugin using `npm`

```shell
npm i -D @savaryna/tailwindcss-material-symbols
```

or `pnpm`, etc.

```shell
pnpm add -D @savaryna/tailwindcss-material-symbols
```

Add the plugin to your `tailwind.config.js` file.

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

Follow Google's [guide](https://developers.google.com/fonts/docs/material_symbols#using_material_symbols) on how to add Material Symbols to your page. For example you could just add a `link` tag to your pages `head`.

```html
<head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
</head>
```

## Basic usage

Now you can use the base class `icon` to style elements as Material Symbols.

> [!TIP]
> The base class can be changed by passing a `baseClass` option to the plugin. In that case use your custom base class instead of `icon`. See [changing the default base class](#changing-the-default-base-class) for more information.

```html
<span class="icon">star</span>
```

### Choosing the font

The plugin includes a modifier class for each Material Symbols font family, so you can easily choose what symbol style to use.

> [!IMPORTANT]
> All modifier classes need to be used together with the base class. Always include the base class when using a modifier class.

```html
<span class="icon icon-rounded">star</span>
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

### Choosing the weight

Weight modifiers allow you to adjust the weight of the symbols stroke. Read more [here](https://developers.google.com/fonts/docs/material_symbols#wght_axis).

```html
<span class="icon icon-700">star</span>
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
<span class="icon transition-all hover:icon-700">star</span>
```

### Choosing the fill

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
  <span class="peer:checked:icon-filled icon transition-all">star</span>
</label>
```

### Choosing the grade

Grade modifiers allow you to choose the weight of the symbols in a more granular way. A lower value is recommended to be used on darker backgrounds. Read more [here](https://developers.google.com/fonts/docs/material_symbols#grad_axis).

Classes you can use with the default config:

| Class                     | Font grade |
| ------------------------- | ---------- |
| `icon-dark`               | -25        |
| `icon-normal` _(default)_ | 0          |
| `icon-emphasis`           | 200        |

These can be animated using transitions.

### Choosing the optical size

Optical size modifiers allow you to choose the size of the symbols. In addition to changing the symbol size this also changes the stroke weight as the symbol scales. Read more [here](https://developers.google.com/fonts/docs/material_symbols#opsz_axis).

Classes you can use with the default config:

| Class                 | Font optical size |
| --------------------- | ----------------- |
| `icon-20`             | 20                |
| `icon-24` _(default)_ | 24                |
| `icon-40`             | 40                |
| `icon-48`             | 48                |

These can be animated using transitions.

### With pseudo elements

You can use the plugin with Tailwind CSS [pseudo elements](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements) to add icons using css content.

```html
<label
  className="after:icon after:content-['arrow\_drop\_down'] after:absolute after:right-2 ..."
>
  <select className="...">
    ...
  </select>
</label>
```

## Animating font properties

You can use Tailwind CSS classes to animate the font properties. You can animate the weight, fill, grade, optical size and other element features. Read more about using [transitions](https://tailwindcss.com/docs/transition-property) and [animations](https://tailwindcss.com/docs/animation) in the tailwindcss documentation. You can also find more information on Google's [developer guide](https://developers.google.com/fonts/docs/material_symbols) for Material Symbols.

| Here are a few examples:                        |
| ----------------------------------------------- |
| `transition-all icon group-hover:icon-700`      |
| `transition-all icon group-hover:icon-filled`   |
| `transition-all icon group-hover:icon-emphasis` |

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
<span class="symbol symbol-rounded">star</span>
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
