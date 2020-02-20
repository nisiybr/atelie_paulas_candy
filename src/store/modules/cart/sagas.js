import {Alert} from 'react-native';
import {call, put, all, select, takeLatest} from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';

// import api from '../../../services/api';
import {formatPrice} from '../../../util/format';

import {addToCartSuccess, removeFromCartSucess} from './actions';

function* addToCart({data}) {
  // const productExists = yield select(state =>
  //   state.cart.find(product => product.id === id),
  // );
  // const stock = yield call(api.get, `/stock/${id}`);
  // const stockAmount = stock.data.amount;
  // const currentAmount = productExists ? productExists.amount : 0;
  // const amount = currentAmount + 1;
  // if (amount > stockAmount) {
  //   Alert.alert('Quantidade solicitada fora de estoque');
  //   return;
  // }
  // if (productExists) {
  // yield put(updateAmountSuccess(id, amount));
  // } else {
  //   const data = {
  //     ...response.data,
  //     amount: 1,
  //     priceFormatted: formatPrice(response.data.price),
  //   };
  yield put(addToCartSuccess(data));
  NavigationService.navigate('CreateSale');
  //   // history.push('/cart');
  // }
}

function* updateAmount({data}) {
  // if (amount <= 0) return;
  // const stock = yield call(api.get, `/stock/${id}`);
  // const stockAmount = stock.data.amount;
  // if (amount > stockAmount) {
  //   Alert.alert('Quantidade solicitada fora de estoque');
  //   return;
  // }
  yield put(removeFromCartSucess(data.productId));
  yield put(addToCartSuccess(data));
  NavigationService.navigate('CreateSale');
}
function* removeFromCart({id}) {
  // if (amount <= 0) return;
  // const stock = yield call(api.get, `/stock/${id}`);
  // const stockAmount = stock.data.amount;
  // if (amount > stockAmount) {
  //   Alert.alert('Quantidade solicitada fora de estoque');
  //   return;
  // }
  yield put(removeFromCartSucess(id));
  NavigationService.navigate('CreateSale');
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/REMOVE_REQUEST', removeFromCart),
]);
