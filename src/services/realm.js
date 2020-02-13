import Realm from 'realm';

import ProductSchema from '../schemas/ProductSchema';
import SaleSchema from '../schemas/SaleSchema';
import SaleItemsSchema from '../schemas/SaleItemsSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ProductSchema, SaleSchema, SaleItemsSchema],
  });
}
