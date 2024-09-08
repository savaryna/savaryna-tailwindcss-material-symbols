import React from 'react';
import ReactDOM from 'react-dom/client';
import { name, description, version, repository } from '../package.json';
import config from './config';
const repositoryHome = repository.url.replace('git+', '').replace('.git', '');

const camelCaseToWords = (str: string) =>
  str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase();

const Icon = ({
  className = '',
  name,
}: {
  className?: string;
  name: string;
}) => <span className={`icon ${className}`}>{name}</span>;

const Code = ({
  pop = false,
  children,
}: {
  pop?: boolean;
  multiline?: boolean;
  children: React.ReactNode;
}) => (
  <pre
    className={`not-prose max-w-full overflow-x-scroll rounded ${pop ? 'bg-blue-50 text-blue-700' : 'bg-gray-50'} p-1 text-xs sm:text-sm`}
  >
    {children}
  </pre>
);

const App = () => {
  return (
    <main className="prose mx-auto px-4 py-12">
      <h1 className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
        <span
          dangerouslySetInnerHTML={{ __html: name.replace('/', '/<br>') }}
        ></span>
        <sup className="-top-3 ml-2 rounded bg-blue-50 p-1 font-mono text-xs text-blue-900">
          v{version}
        </sup>
      </h1>
      <p>{description}</p>
      <div className="flex flex-col flex-wrap items-start gap-x-6 gap-y-3 sm:flex-row sm:items-center">
        <a
          className="not-prose inline-flex items-center gap-2 rounded border bg-gray-100 py-1 pl-2 pr-3 transition-colors before:icon before:block before:origin-center before:transition-all before:content-['star'] before:icon-rounded hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700 hover:before:-rotate-12 hover:before:scale-110 focus:bg-gray-200"
          href={repositoryHome}
          target="_blank"
        >
          Star it on GitHub
        </a>
        <a
          href="https://www.npmjs.com/package/@savaryna/tailwindcss-material-symbols"
          target="_blank"
        >
          NPM
        </a>
        <a href="https://tailwindcss.com" target="_blank">
          Tailwind CSS
        </a>
        <a href="https://fonts.google.com/icons" target="_blank">
          Material Symbols
        </a>
      </div>
      <hr />
      <h2>Installation</h2>
      <p>
        <span>Learn how to install and use the plugin on the </span>
        <a
          href={`${repositoryHome}?tab=readme-ov-file#installation`}
          target="_blank"
        >
          GithHub
        </a>
        <span> page.</span>
      </p>
      <h2>Basic usage</h2>
      {Object.entries(config.theme.materialSymbols).map(([property, value]) => {
        const modifiers = Object.keys(value).filter((m) => m != 'DEFAULT');

        return (
          <React.Fragment key={property}>
            <h3>Choosing the {camelCaseToWords(property)}</h3>
            <div className="grid items-center justify-items-start gap-3 sm:grid-cols-[1fr_4rem]">
              {modifiers.map((modifier) => (
                <React.Fragment key={modifier}>
                  <div className="not-prose flex items-center gap-2 text-xs sm:text-sm">
                    <Code pop={value.DEFAULT === value[modifier]}>
                      &lt;span class="icon icon-{modifier}"&gt;star&lt;span&gt;
                    </Code>
                    <span>
                      {value.DEFAULT === value[modifier] && '(default)'}
                    </span>
                  </div>
                  <Icon
                    className={`sm:justify-self-center icon-${modifier}`}
                    name="star"
                  />
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        );
      })}
      <h3>With pseudo elements</h3>
      <p>
        You can use the plugin with Tailwind CSS&nbsp;
        <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-elements"
          target="_blank"
        >
          pseudo elements
        </a>
        &nbsp;to add icons using css content.
      </p>
      <div className="grid items-center justify-items-start gap-3 sm:grid-cols-[1fr_auto]">
        <Code>{`<label className="after:icon after:content-['arrow\\_drop\\_down'] after:absolute after:right-2 ...">\n\t<select className="...">\n\t\t...\n\t</select>\n</label>`}</Code>
        <label className="group relative flex items-center after:icon after:pointer-events-none after:absolute after:right-2 after:content-['arrow\_drop\_down']">
          <select className="appearance-none rounded bg-gray-100 py-2 pl-4 pr-10 transition-colors group-hover:bg-gray-200">
            {[1, 2, 3, 4].map((o) => (
              <option key={o} value={o}>
                Option {o}
              </option>
            ))}
          </select>
        </label>
      </div>
      <h2>Animating font properties</h2>
      <p>
        You can use Tailwind CSS classes to animate the font properties. You can
        animate the weight, fill, grade, optical size and other element
        features. Read more about using&nbsp;
        <a
          href="https://tailwindcss.com/docs/transition-property"
          target="_blank"
        >
          transitions
        </a>
        &nbsp;and&nbsp;
        <a href="https://tailwindcss.com/docs/animation" target="_blank">
          animations
        </a>
        &nbsp;in the tailwindcss documentation. You can also find more
        information on Google&apos;s&nbsp;
        <a
          href="https://developers.google.com/fonts/docs/material_symbols"
          target="_blank"
        >
          developer guide
        </a>
        &nbsp;for Material Symbols.
      </p>
      <p>Here are a few examples:</p>
      <div className="grid items-center justify-items-start gap-3 sm:grid-cols-[1fr_auto]">
        {Object.entries(config.theme.materialSymbols)
          .filter(([property]) => !['font', 'opticalSize'].includes(property))
          .map(([property, value]) => {
            const lastModifier = Object.keys(value)
              .filter((m) => m != 'DEFAULT')
              .pop();

            return (
              <React.Fragment key={property}>
                <Code>transition-all icon group-hover:icon-{lastModifier}</Code>
                <label className="group flex items-center gap-2 justify-self-center rounded bg-gray-100 px-4 py-2 transition-all hover:bg-gray-200">
                  <span>Hover me</span>
                  <Icon
                    name="star"
                    className={`transition-all icon-rounded group-hover:icon-${lastModifier}`}
                  />
                </label>
              </React.Fragment>
            );
          })}
      </div>
    </main>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(<App />);
