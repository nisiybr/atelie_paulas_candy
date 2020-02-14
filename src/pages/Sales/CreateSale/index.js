import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';
import {useSelector, useDispatch} from 'react-redux';
import getRealm from '../../../services/realm';
import * as CartActions from '../../../store/modules/cart/actions';

import {
  Container,
  Form,
  DefaultButton,
  DefaultButtonText,
  Input,
  Label,
  SalesItems,
  Item,
  ItemButton,
  ItemTextButton,
  ItemTextName,
  LabelView,
  LabelText,
  ValueView,
} from './styles';

export default function CreateSale({navigation}) {
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');

  const descRef = useRef();
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
    })),
  );
  // console.log(products);
  // console.tron.log(products);
  // useEffect(() => {

  // }, [products]);

  function handleAddItem() {
    navigation.navigate('AddProduct');
  }
  function handleConfirm() {
    // navigation.navigate('CreateProduct');
  }
  function handleEdit() {
    // navigation.navigate('CreateProduct');
  }

  return (
    <Container>
      <Form>
        <Label>Data da Venda</Label>
        <Input
          placeholder="Selecione a Data"
          value={date}
          onChangeText={setDate}
          returnKeyType="next"
          onSubmitEditing={() => descRef.current.focus()}
        />
        <Label>Descrição da Venda</Label>
        <Input
          placeholder="Opcional"
          value={desc}
          onChangeText={setDesc}
          returnKeyType="next"
          ref={descRef}
          // onSubmitEditing={() => descRef.current.focus()}
        />
      </Form>
      <SalesItems
        data={products}
        keyExtractor={item => String(item.productId)}
        keyboardShouldPersistTaps="handled"
        // horizontal={false}
        // numColumns={4}
        renderItem={({item, index}) => (
          <Item index={index}>
            <ItemButton onPress={() => handleEdit(item)}>
              <ItemTextName>{item.product_name}</ItemTextName>
              <LabelView>
                <LabelText>Quantidade: </LabelText>
                <LabelText>Preço Unitário: </LabelText>
                <LabelText>Subtotal: </LabelText>
              </LabelView>
              <ValueView>
                <ItemTextButton>{item.quantity}</ItemTextButton>
                <ItemTextButton> {item.price}</ItemTextButton>
                <ItemTextButton>{item.price * item.quantity}</ItemTextButton>
              </ValueView>
            </ItemButton>
          </Item>
        )}
      />

      <DefaultButton onPress={handleAddItem} index={1}>
        <Icon name="add-circle" size={30} color="#fff" />
        <DefaultButtonText>Adicionar Novo Item</DefaultButtonText>
      </DefaultButton>

      <DefaultButton onPress={handleConfirm} index={2}>
        <Icon name="done" size={30} color="#fff" />
        <DefaultButtonText>Confirmar Venda</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
}
CreateSale.navigationOptions = {
  headerTitle: 'Cadastrar Venda',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
