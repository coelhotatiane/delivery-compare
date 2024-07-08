import { body } from "./types";

class RappiApiService {
  static async getData(body: body) {
    const method = 'POST';
    const url = 'https://services.rappi.com.br/api/pns-global-search-api/v1/unified-search?is_prime=false&unlimited_shipping=false';
    const bearerToken = "Bearer ft.gAAAAABmi_RiPlUNnX9m94O_8CIkS3e9_4LzCSYVpiFed44gOaQBGnW6PzCmyrDTc4idjKowQ9JYog85ol_Vfi9cqesHdgnisK-YiwAF3eZsxcZDQEZi08l__kUBj8OmYX1MzUxbLZqRenLcUgf_QyJVvrwDySH5AtTJSsNECfoVMjvgHdYaiRIljVosMWyIWXTteBDuMlJ9GAX3ECSUVKZ7maLsTMAnYmZizeqYvI22JBBo7Jg5h71bhfpUaOe-KUJRRaqlUApMOKVLZ2lTyhvXCbryYmpNtsZvK64n-RT5B32imwokv__LcyuYweNrgdc-YdsXUfkg2VPkKY6B7l5MjoMGt_y-zESS-j-ZcWfTL0l5x_AhT-a3WwsCPjLCexXOssMgNjR7m8yXbkZpdqj_B3QZDOCA2Q==";
    const headers = {
      "Content-Type": "application/json",
      "Authorization": bearerToken
    };
    const response = await fetch(url,
      {
          method,
          headers,
          body: JSON.stringify(body),
      });
    const data = await response.text();
    return JSON.parse(data);
  }
}

export default RappiApiService;
