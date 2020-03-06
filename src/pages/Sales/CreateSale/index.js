import React, {useState, useRef, useMemo, useEffect} from 'react';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Platform} from 'react-native';
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
  DatePicker,
  Total,
  TotalLabel,
  TotalValue,
} from './styles';

export default function CreateSale({navigation}) {
  const descRef = useRef();

  const [desc, setDesc] = useState('');
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [show, setShow] = useState(false);

  useMemo(() => {
    const value = format(date, 'dd/MM/yyyy');
    setFormattedDate(value);
  }, [date]);

  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      priceFormatted: String(product.price.toFixed(2)).replace('.', ','),
      subtotalFormatted: String(
        (product.quantity * product.price).toFixed(2),
      ).replace('.', ','),
    })),
  );

  const totalValue = useSelector(state =>
    String(
      state.cart
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2),
    ).replace('.', ','),
  );

  function handleAddItem() {
    navigation.navigate('AddSaleProduct');
  }
  function handleConfirm() {
    // navigation.navigate('CreateProduct');
  }
  function handleEdit(item) {
    navigation.navigate('EditSaleProduct', {item});
  }

  function onChange(event, selectedDate) {
    const currentDate = selectedDate || date;

    setShow(false);
    setDate(currentDate);
    // setShow(Platform.OS === 'ios');
  }
  function showDatepicker() {
    setShow(true);
  }

  return (
    <Container>
      <Form>
        <Label>Data da Venda</Label>
        {show && (
          <DatePicker
            timeZoneOffsetInMinutes={0}
            value={date}
            is24Hour
            display="default"
            onChange={onChange}
          />
        )}
        <Input
          placeholder="Selecione a Data"
          value={formattedDate}
          onFocus={showDatepicker}
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
                <ItemTextButton> {item.priceFormatted}</ItemTextButton>
                <ItemTextButton>{item.subtotalFormatted}</ItemTextButton>
              </ValueView>
            </ItemButton>
          </Item>
        )}
      />
      <Total>
        <TotalLabel>Total</TotalLabel>
        <TotalValue>{totalValue}</TotalValue>
      </Total>
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
