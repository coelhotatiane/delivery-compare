export interface IIfoodShoppingList {
  origin: string,
  description: string,
  unitPrice: number,
  weight: {
      value: number,
      unit: string,
      unitWeight: number
  }
}

export interface IIfoodProduct {
  name: string,
  unitPrice: number,
  weightQuantity: number,
  weightUnit: string
}
