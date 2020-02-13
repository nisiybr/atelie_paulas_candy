export default class ProductSchema {
  static schema = {
    name: 'Product',
    primaryKey: 'product_id',
    properties: {
      product_id: {
        type: 'string',
      },
      name: 'string',
      description: 'string?',
      brand: 'string',
      neto: 'int',
      active: {type: 'bool', default: true},
    },
  };
}
