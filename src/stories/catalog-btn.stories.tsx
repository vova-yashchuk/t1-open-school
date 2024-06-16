import CatalogBtn, { ButtonProps } from "../components/catalog-btn/catalog-btn";
import "../components/catalog-btn/catalog-btn.scss";
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/CatalogBtn',
  component: CatalogBtn,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[AppRoute.Root]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    buttonProps: {
      control: {
        type: 'select',
        options: ['Go to shopping', 'Search', 'Show more', 'Add to cart', 'На главную'],
      },
    },
    isLoading: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <CatalogBtn {...args} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  buttonProps: 'Search',
  isLoading: false,
  handleFetchSearch: () => console.log('Search button clicked'),
};

