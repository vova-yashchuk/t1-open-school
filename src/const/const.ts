import { StyleType } from "../types"

export enum AppRoute {
  Root = '/',
  Product = '/product/:id',
  Cart = '/cart',
  NotFound = '*',
  RootCatalog = '/#catalog',
  RootFaq = '/#faq',
  Auth = '/auth'
}

export const SCROLL_TO_FAQ = 1567;
export const SCROLL_TO_CATALOG = 528;

export const PRODUCTS_PER_PAGE = 9;

export enum NameSpace {
  appSlice = "appSlice",
}

export const headerHeight: StyleType = {
  height: '90px',
}

export const headerBorderStyle: StyleType = {
  borderBottom: 'none',
}

export const navStyle: StyleType = {
  alignSelf: 'center'
}

export const USER_ID = 94;