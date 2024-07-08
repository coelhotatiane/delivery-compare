import { response } from "./RappiApi/types";
import { IIfoodProduct } from "./IfoodApi/types";

class BestMatch {
  response: response | undefined;
  productInfo;
  constructor(response: response | undefined, productInfo: IIfoodProduct) {
    this.response = response;
    this.productInfo = productInfo;
  }

  getBestMatch() {
    let bestMatch;
    let shippingCost;
    out: for(const store of this.response?.stores ?? []) {
      shippingCost = store.shipping_cost;
      const products = store.products;
      for(const candidateProduct of products) {
        if(!this.productInfo.weightQuantity && !this.productInfo.weightUnit) {
          bestMatch = candidateProduct;
          break out;
        } else if(candidateProduct.unit_type === 'kg' && this.productInfo.weightUnit === 'GRAMS') {
          if(candidateProduct.quantity === this.productInfo.weightQuantity / 1000) {
            bestMatch = candidateProduct;
            break out;
          }
        } else {
          if(candidateProduct.quantity === this.productInfo.weightQuantity) {
            bestMatch = candidateProduct;
            break out;
          }
        }
      }
    }
    return  { shippingCost, bestMatch };
  }
}

export default BestMatch;
