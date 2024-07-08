import { IIfoodProduct } from "./IfoodApi/types";
import { IRappiProduct } from "./RappiApi/types";

class ComparisonHelper {
  static getComparisonView(originalProduct: IIfoodProduct, newProduct: IRappiProduct | undefined) {
    return {
      product: originalProduct.name,
      originalPrice: originalProduct.unitPrice,
      bestMatch: newProduct?.name || 'not found',
      bestMatchPrice: newProduct?.price,
    }
  }
}

export default ComparisonHelper;
