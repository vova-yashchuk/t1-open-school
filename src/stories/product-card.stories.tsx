
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Product } from '../types';
import ProductCard, { ProductCardProps } from '../components/product-card/product-card';

const sampleProduct: Product = {
    id: 1,
    title: 'Sample Product',
    price: 99.99,
    images: ["./img/puma.png"],
    description: '',
    category: '',
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    tags: [],
    brand: '',
    sku: '',
    weight: 0,
    dimensions: {
        width: 0,
        height: 0,
        depth: 0
    },
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    reviews: [],
    returnPolicy: '',
    minimumOrderQuantity: 0,
    meta: {
        createdAt: '',
        updatedAt: '',
        barcode: '',
        qrCode: ''
    },
    thumbnail: ''
};

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (StoryComponent) => (
      <Router>
        <StoryComponent />
      </Router>
    ),
  ],
} as Meta;

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

export const InCart = Template.bind({});
InCart.args = {
  isInCart: true,
  product: sampleProduct,
};

export const NotInCart = Template.bind({});
NotInCart.args = {
  isInCart: false,
  product: sampleProduct,
};
