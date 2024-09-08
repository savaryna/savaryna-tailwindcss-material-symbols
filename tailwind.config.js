/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/index.tsx'],
  safelist: [
    {
      pattern: /.*icon.*/,
      variants: [
        'hover',
        'focus',
        'group-hover',
        'peer-hover',
        'before',
        'after',
      ],
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('./dist/index.js')],
};
