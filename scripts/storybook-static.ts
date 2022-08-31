import path from 'path';
import storybook from '@storybook/react/standalone';

storybook({
  mode: 'static',
  outputDir: './sb-dist/',
  configDir: path.join(__dirname, '../configuration/storybook'),
});
