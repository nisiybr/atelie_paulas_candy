import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import getRealm from '../../../../services/realm';
import * as CartActions from '../../../../store/modules/cart/actions';
import {
  Container,
  Form,
  Label,
  Input,
  DefaultButton,
  DefaultButtonText,
  Picker,
} from './styles';

export default function AddProduct({navigation}) {
  const dispatch = useDispatch();

  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const quantityRef = useRef();
  const priceRef = useRef();

  async function loadProducts() {
    const realm = await getRealm();
    const data = realm
      .objects('Product')
      .sorted('name')
      .filtered('active=true');

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleSelectItem(item) {
    setProductId(item);
  }
  function handleAddItem() {
    const data = {
      productId,
      quantity,
      price,
    };
    dispatch(CartActions.addToCartRequest(data));
  }

  return (
    <Container>
      <Form>
        <Label>Produto</Label>
        <Picker
          selectedValue={productId}
          onValueChange={itemValue => handleSelectItem(itemValue)}
          mode="dropdown">
          {products.map(item => (
            <Picker.Item
              label={item.name}
              value={item.product_id}
              key={item.product_id}
            />
          ))}
        </Picker>
        <Label>Quantidade</Label>
        <Input
          placeholder="Informe a Quantidade"
          value={quantity}
          onChangeText={setQuantity}
          returnKeyType="next"
          ref={quantityRef}
          onSubmitEditing={() => priceRef.current.focus()}
        />
        <Label>Preço Unitário</Label>
        <Input
          placeholder="Informe Preço do Item"
          value={price}
          onChangeText={setPrice}
          returnKeyType="next"
          ref={priceRef}
        />
      </Form>
      <DefaultButton onPress={handleAddItem}>
        <Icon name="save" size={30} color="#fff" />
        <DefaultButtonText>Incluir</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
}

AddProduct.navigationOptions = {
  headerTitle: 'Adicionar Item à Venda',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
