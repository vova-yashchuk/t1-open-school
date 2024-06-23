import { CartProduct } from "../types";

export const isInCart = (productId: number, cartProducts: CartProduct[]): boolean => {
    return cartProducts.some((product) => product.id === productId);
}

export const countPriceWidthDiscount = (price: number, percent: number): string => {
    const discountAmount = (price * percent) / 100;
    const discountedAmount = price - discountAmount;

    return discountedAmount.toFixed(2) + '$';
} 