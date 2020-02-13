export default class SaleItemsSchema {
  static schema = {
    name: 'SaleItems',
    primaryKey: 'sale_items_id',
    properties: {
      sale_items_id: 'string',
      Product: {type: 'Product'},
      amount: 'int',
      unit_price: 'float',
    },
  };
}
