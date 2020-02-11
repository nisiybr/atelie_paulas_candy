import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import getRealm from '../../services/realm';

import {
  Container,
  ProductList,
  Product,
  ProductButton,
  DeleteButton,
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
    const data = realm
      .objects('Product')
      .sorted('name')
      .filtered('active=true');

    setProducts(data);
  }
  async function deleteProducts(id) {
    const realm = await getRealm();
    realm.write(() => {
      const data = {
        id,
        active: false,
      };
      realm.create('Product', data, 'modified');
    });
  }
  useEffect(() => {
    loadProducts();
  }, [products]);

  // Adicionar funcao
  function handleNavigate() {
    navigation.navigate('CreateProduct');
  }
  function handleEdit(item) {
    navigation.navigate('EditProduct', {item});
  }
  function handleDelete(item) {
    Alert.alert(
      'Confirma Exclusão',
      `Você deseja realmente excluir o Produto: "${item.name}"?`,
      [
        {
          text: 'Não quero!',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Quero Excluir!',
          onPress: () => deleteProducts(item.id),
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item, index}) => (
          <Product index={index}>
            <ProductButton onPress={() => handleEdit(item)}>
              <ProductName>{item.name}</ProductName>
              <ProductBrand>{item.brand}</ProductBrand>
              <ProductDescription>{item.description}</ProductDescription>
              <ProductDescription>{item.active}</ProductDescription>
            </ProductButton>
            <DeleteButton onPress={() => handleDelete(item)}>
              <Icon name="delete-sweep" size={30} color="#FA5F5F" />
            </DeleteButton>
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
