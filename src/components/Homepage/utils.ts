import { IIfoodShoppingList, IIfoodProduct } from '../../services/IfoodApi/types'

const formatIfoodData = (shoppingList: IIfoodShoppingList[]) => {
  const productsInfo: IIfoodProduct[] = [];
  shoppingList.forEach((item) => {
    productsInfo.push({
      name:  item.description,
      unitPrice: item.unitPrice,
      weightQuantity: item.weight?.unitWeight || 0,
      weightUnit: item.weight?.unit || ''
    });
  });

  return productsInfo;
}

export { formatIfoodData };
