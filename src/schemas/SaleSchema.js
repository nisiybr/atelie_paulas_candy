export default class SaleSchema {
  static schema = {
    name: 'Sale',
    primaryKey: 'sale_id',
    properties: {
      sale_id: 'string',
      date: 'date',
      desc: 'string?',
      total: 'float',
    },
  };
}
