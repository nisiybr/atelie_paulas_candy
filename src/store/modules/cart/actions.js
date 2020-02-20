export function addToCartRequest(data) {
  return {
    type: '@cart/ADD_REQUEST',
    data,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCartRequest(id) {
  return {
    type: '@cart/REMOVE_REQUEST',
    id,
  };
}
export function removeFromCartSucess(id) {
  return {
    type: '@cart/REMOVE_SUCESS',
    id,
  };
}

export function updateAmountRequest(data) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    data,
  };
}

// export function updateAmountSuccess(product) {
//   return {
//     type: '@cart/UPDATE_AMOUNT_SUCCESS',
//     product,
//   };
// }
