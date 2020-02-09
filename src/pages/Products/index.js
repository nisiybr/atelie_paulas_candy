import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getRealm from '../../services/realm';

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
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const realm = await getRealm();
    const data = realm.objects('Product').sorted('name');

    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  // Adicionar funcao
  function handleNavigate() {
    navigation.navigate('CreateProduct');
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        keyboardShouldPersistTaps="handled"
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
