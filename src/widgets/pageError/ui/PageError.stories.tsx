import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';


const meta = {
  title: 'widgets/PageError',
  component: PageError,
  
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {args:{}}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args:{}
}