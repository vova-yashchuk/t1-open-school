import "../components/add-to-cart-button/add-to-cart-button.scss";
import AddToCartButton from "../components/add-to-cart-button/add-to-cart-button";
import { StoryFn } from "@storybook/react";

export default {
    title: 'components/AddToCartButton',
    component: AddToCartButton,
};

const Template: StoryFn = (args) => <AddToCartButton {...args}/>;

export const Default = Template.bind({});
Default.args = {};
