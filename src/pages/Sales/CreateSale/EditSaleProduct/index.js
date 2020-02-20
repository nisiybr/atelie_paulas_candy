import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import * as CartActions from '../../../../store/modules/cart/actions';
import {
  Container,
  Form,
  Label,
  Input,
  ButtonView,
  DefaultButton,
  DefaultButtonText,
} from './styles';

export default function EditSaleProduct({navigation}) {
  const dispatch = useDispatch();

  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const quantityRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    const data = navigation.getParam('item');
    setProductId(String(data.productId));
    setProductName(String(data.product_name));
    setQuantity(String(data.quantity));
    setPrice(String(data.priceFormatted));
  }, [navigation]);

  function handleCurrency(value) {
    let str = value;
    str = str.replace(',', '');
    str /= 100;
    str = str.toFixed(2);
    str = String(str).replace('.', ',');
    setPrice(str);
  }
  function handleEditItem() {
    const product = {
      productId,
      product_name: productName,
      quantity: parseFloat(quantity.replace(',', '.')),
      price: parseFloat(price.replace(',', '.')),
    };
    dispatch(CartActions.updateAmountRequest(product));
  }

  function handleDeleteItem() {
    dispatch(CartActions.removeFromCartRequest(productId));
  }

  return (
    <Container>
      <Form>
        <Label>Produto</Label>
        <Input
          placeholder="Selecione um Produto"
          value={productName}
          editable={false}
        />
        <Label>Quantidade</Label>
        <Input
          placeholder="0"
          value={quantity}
          onChangeText={setQuantity}
          returnKeyType="next"
          ref={quantityRef}
          keyboardType="number-pad"
          onSubmitEditing={() => priceRef.current.focus()}
        />
        <Label>Preço Unitário</Label>
        <Input
          placeholder="0,00"
          value={price}
          onChangeText={event => handleCurrency(event)}
          returnKeyType="next"
          keyboardType="number-pad"
          ref={priceRef}
        />
      </Form>
      <ButtonView>
        <DefaultButton onPress={handleDeleteItem} index={1}>
          <Icon name="delete" size={30} color="#fff" />
          <DefaultButtonText>Excluir</DefaultButtonText>
        </DefaultButton>
        <DefaultButton onPress={handleEditItem} index={2}>
          <Icon name="save" size={30} color="#fff" />
          <DefaultButtonText>Salvar</DefaultButtonText>
        </DefaultButton>
      </ButtonView>
    </Container>
  );
}

EditSaleProduct.navigationOptions = {
  headerTitle: 'Editar Item da Venda',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
