import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uuid from 'react-native-uuid';
import getRealm from '../../../services/realm';

import {
  Container,
  Form,
  DefaultButton,
  DefaultButtonText,
  Input,
  Label,
} from './styles';

export default function CreateProduct({navigation}) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [neto, setNeto] = useState('');

  const descRef = useRef();
  const brandRef = useRef();
  const netoRef = useRef();

  async function SaveProduct() {
    try {
      const netoConverted = parseInt(neto);

      const data = {
        id: uuid.v1(),
        name,
        description,
        brand,
        neto: netoConverted,
      };
      const realm = await getRealm();
      realm.write(() => {
        realm.create('Product', data);
      });

      navigation.navigate('Products');
    } catch (err) {
      console.log('Erro');
    }
  }

  return (
    <Container>
      <Form>
        <Label>Nome do Produto</Label>
        <Input
          placeholder="Digite o nome do Produto"
          value={name}
          onChangeText={setName}
          returnKeyType="next"
          onSubmitEditing={() => descRef.current.focus()}
        />
        <Label>Descrição</Label>
        <Input
          placeholder="Opcional"
          value={description}
          onChangeText={setDescription}
          returnKeyType="next"
          ref={descRef}
          onSubmitEditing={() => brandRef.current.focus()}
        />
        <Label>Marca</Label>
        <Input
          placeholder="Selecione a marca do Produto"
          value={brand}
          onChangeText={setBrand}
          returnKeyType="next"
          ref={brandRef}
          onSubmitEditing={() => netoRef.current.focus()}
        />
        <Label>Peso Líquido (gramas)</Label>
        <Input
          placeholder="Informe o peso líquido"
          keyboardType="number-pad"
          value={neto}
          onChangeText={setNeto}
          returnKeyType="send"
          ref={netoRef}
          onSubmitEditing={SaveProduct}
        />
      </Form>
      <DefaultButton onPress={SaveProduct}>
        <Icon name="save" size={30} color="#fff" />
        <DefaultButtonText>Salvar</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
}

CreateProduct.navigationOptions = {
  headerTitle: 'Cadastrar Produto',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
