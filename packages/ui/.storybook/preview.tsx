import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
import "./style.css";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#050505' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
};

export default preview;
