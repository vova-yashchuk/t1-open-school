import { StyleType } from "../types"

export enum AppRoute {
  Root = '/',
  Product = '/product/:id',
  Cart = '/cart',
  NotFound = '*',
  RootCatalog = '/#catalog',
  RootFaq = '/#faq'
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