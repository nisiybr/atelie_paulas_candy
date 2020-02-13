import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getRealm from '../../services/realm';

import {
  Container,
  DefaultButton,
  DefaultButtonText,
  SalesList,
  Sale,
  SaleDesc,
} from './styles';

export default function Sales({navigation}) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const realm = await getRealm();
    const data = realm.objects('Sale').sorted('date', true);

    setProducts(data);
  }
  useEffect(() => {
    loadProducts();
  }, []);

  function handleNavigate() {
    navigation.navigate('CreateSale');
  }

  return (
    <Container>
      <SalesList
        data={products}
        keyExtractor={item => String(item.product_id)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item, index}) => (
          <Sale index={index}>
            <SaleDesc>{item.name}</SaleDesc>
          </Sale>
        )}
      />
      <DefaultButton onPress={handleNavigate}>
        <Icon name="add-circle" size={30} color="#fff" />
        <DefaultButtonText>Cadastrar</DefaultButtonText>
      </DefaultButton>
    </Container>
  );
}
Sales.navigationOptions = {
  headerTitle: 'Vendas',
  headerLayoutPreset: 'center', // Deixa o titulo no centro por padrao
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7098FF',
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
