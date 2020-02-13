import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';
import {useSelector, useDispatch} from 'react-redux';
import getRealm from '../../../services/realm';
import * as CartActions from '../../../store/modules/cart/actions';

import {
  Container,
  Form,
  ButtonView,
  DefaultButton,
  DefaultButtonText,
  Input,
  Label,
  Item,
  SalesItems,
  TextItem,
} from './styles';

export default function CreateSale({navigation}) {
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const [salesItems, setSalesItems] = useState([]);

  const descRef = useRef();

  async function loadSalesItems() {
    // const realm = await getRealm();
    // const data = realm.objects('Sale').sorted('date', true);
    // setSalesItems(data);
  }
  // async function saveSalesItems() {
  //   try {
  //     const realm = await getRealm();
  //     const Product = {
  //       product_id: uuid.v1(),
  //       name: 'Abacaxi',
  //       description: 'teste',
  //       brand: 'teste',
  //       neto: 1,
  //     };
  //     const data = {
  //       sale_items_id: uuid.v1(),
  //       Product,
  //       amount: 3,
  //       unit_price: 4.1,
  //     };
  //     realm.write(() => {
  //       realm.create('SaleItems', data);
  //     });
  //     console.tron.log(data);
  //   } catch (err) {
  //     console.tron.log('Erro');
  //   }
  // }

  useEffect(() => {}, []);

  function handleAddItem() {
    navigation.navigate('AddProduct');
  }
  function handleConfirm() {
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
        data={salesItems}
        keyExtractor={item => String(item.sale_items_id)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item, index}) => (
          <Item index={index}>
            <TextItem>{item.amount}</TextItem>
            <TextItem>{item.unit_price}</TextItem>
            <TextItem>{item.amount * item.unit_price}</TextItem>
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
