export interface body {
  lat: number,
  lng: number,
  query: string,
  options: {}
}

export interface headers {
  "Content-Type": string,
  "Authorization": string
}

export interface response {
  stores: store[]
}

export interface store {
  shipping_cost: number,
  products: IRappiProduct[]
}

export interface IRappiProduct {
  name: string,
  price: number,
  unit_type: string,
  quantity: number,
}
