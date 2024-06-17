import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { useAppSelector } from '../hooks/hooks';
import { store } from '../store/index';
import '../components/search/search.scss';
import { State } from '../types';
import Search, {SearchProps} from '../components/search/search';

export default {
  title: 'Components/Search',
  component: Search,
  decorators: [
    (StoryComponent: React.ComponentType) => (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    ),
  ],
} as Meta;

const Template: StoryFn<SearchProps> = (args) => {
  const searchText = useAppSelector((state: State) => state.appSlice.searchText);

  const handleFetchSearch = () => {
    console.log('Fetching search results...');
  };

  return (
    <div style={{ maxWidth: '600px' }}>
      <Search {...args} handleFetchSearch={handleFetchSearch} />
      <p>Search Text: {searchText}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
};

