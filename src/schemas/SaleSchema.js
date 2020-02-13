export default class SaleSchema {
  static schema = {
    name: 'Sale',
    primaryKey: 'sale_id',
    properties: {
      sale_id: 'string',
      date: 'date',
      desc: 'string?',
      items: {type: 'list', objectType: 'SaleItems'},
      total: 'float',
    },
  };
}
