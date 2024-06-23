import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddToCartButton from './add-to-cart-button';
import { useUpdateCartMutation } from '../../store/products-api';

jest.mock('../../store/products-api', () => ({
    useUpdateCartMutation: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const product = {
    id: 1,
    title: 'Test Product',
    description: 'This is a test product',
    price: 100,
    discountPercentage: 10,
    rating: 4.5,
    stock: 50,
    brand: 'Test Brand',
    category: 'Test Category',
    thumbnail: 'test-thumbnail.jpg',
    images: ['image1.jpg', 'image2.jpg'],
    tags: [],
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
    }
};

describe('AddToCartButton', () => {
    let store: MockStore;
    let updateCartMock: jest.Mock<any, any, any>;

    beforeEach(() => {
        store = mockStore({
            appSlice: {
                cart: {
                    id: 1,
                    products: []
                }
            }
        });
        updateCartMock = jest.fn();
        (useUpdateCartMutation as jest.Mock).mockReturnValue([updateCartMock, { isError: false }]);
    });

    it('should render correctly', () => {
        render(
            <Provider store={store}>
                <AddToCartButton product={product} />
            </Provider>
        );

        const button = screen.getByRole('button', { name: /add to cart/i });
        expect(button).toBeInTheDocument();
    });

    it('should dispatch actions and update cart on button click', async () => {
        updateCartMock.mockResolvedValue({
            id: 1,
            products: [{ id: 1, quantity: 1 }]
        });

        render(
            <Provider store={store}>
                <AddToCartButton product={product} />
            </Provider>
        );

        const button = screen.getByRole('button', { name: /add to cart/i });
        fireEvent.click(button);

        expect(store.getActions()).toContainEqual({
            type: 'app/setProductToUpdateQty',
            payload: 1
        });

        await waitFor(() => {
            expect(store.getActions()).toContainEqual({
                type: 'app/changeCartInStore',
                payload: {
                    id: 1,
                    products: [{ id: 1, quantity: 1 }]
                }
            });

            expect(store.getActions()).toContainEqual({
                type: 'app/addInCartProducts',
                payload: [{ id: 1, quantity: 1 }]
            });
        });
    });

    it('should display error message on update error', async () => {
        (useUpdateCartMutation as jest.Mock).mockReturnValue([updateCartMock, { isError: true }]);

        render(
            <Provider store={store}>
                <AddToCartButton product={product} />
            </Provider>
        );

        const button = screen.getByRole('button', { name: /add to cart/i });
        fireEvent.click(button);

        await waitFor(() => {
            const errorMessage = screen.getByText(/some error occurred, please try again/i);
            expect(errorMessage).toBeInTheDocument();
        });
    });
});
