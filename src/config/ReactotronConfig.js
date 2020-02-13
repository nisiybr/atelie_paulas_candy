import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  // variavel global do react native, so vem true se for ambiente de DEV
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear(); // limpa a timeline toda fez que der refresh
}
