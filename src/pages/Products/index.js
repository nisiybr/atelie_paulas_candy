import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ProductList,
  Product,
  ProductName,
  ProductBrand,
  ProductDescription,
  DefaultButton,
  DefaultButtonText,
} from './styles';

export default function Products({navigation}) {
  // Adicionar funcao
  function handleNavigate() {
    navigation.navigate('CreateProduct');
  }

  const data = [
    {
      id: 1,
      name: 'Doce de Leite com Coco',
      brand: 'Tatitânia',
      description: 'Para dietas de Ingestão Controlada de Açucares',
    },
    {
      id: 2,
      name:
        'Doce de Leite com Geleia de Ameixa Doce de Leite com Geleia de Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 3,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 4,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 5,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 6,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 7,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 8,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 9,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 10,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 11,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 12,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
    {
      id: 13,
      name: 'Doce de Leite Ameixa',
      brand: 'Tatitânia',
      description: '',
    },
  ];

  return (
    <Container>
      <ProductList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Product>
            <ProductName>{item.name}</ProductName>
            <ProductBrand>{item.brand}</ProductBrand>
            <ProductDescription>{item.description}</ProductDescription>
          </Product>
        )}
      />
      <DefaultButton onPress={handleNavigate}>
        <Icon name="add-circle" size={30} color="#fff" />
        <DefaultButtonText>Cadastrar</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
}

Products.navigationOptions = {
  headerTitle: 'Produtos',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
