import plugin from 'tailwindcss/plugin';
import handler, { type Options } from './handler';
import config from './config';

export default plugin.withOptions<Options>(handler, () => config);
