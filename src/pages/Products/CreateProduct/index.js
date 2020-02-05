import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Form,
  DefaultButton,
  DefaultButtonText,
  Input,
  InputMulti,
  Label,
} from './styles';

export default function CreateProduct() {
  return (
    <Container>
      <Form>
        <Label>Nome do Produto</Label>
        <Input placeholder="Digite o nome do Produto" />
        <Label>Descrição</Label>
        <InputMulti placeholder="Opcional" />
        <Label>Marca</Label>
        <Input placeholder="Selecione a marca do Produto" />
        <Label>Peso Líquido (gramas)</Label>
        <Input placeholder="Informe o peso líquido" keyboardType="number-pad" />
      </Form>
      <DefaultButton>
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
