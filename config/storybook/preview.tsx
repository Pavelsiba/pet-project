import type { Preview } from "@storybook/react";
import "app/styles/index.scss";
import { ThemeDecorator } from "../../src/shared/config/storybook/themeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers/ThemeProvider";
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    RouterDecorator,
    ThemeDecorator(Theme.LIGHT)
  ]
};

export default preview;
