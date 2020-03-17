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
  const [sales, setSales] = useState([]);

  async function loadSales() {
    const realm = await getRealm();
    const data = realm.objects('Sale').sorted('date', true);

    setSales(data);
  }
  useEffect(() => {
    loadSales();
  }, []);

  function handleNavigate() {
    console.tron.log(sales);
    navigation.navigate('CreateSale');
  }

  return (
    <Container>
      <SalesList
        data={sales}
        keyExtractor={item => String(item.sale_id)}
        keyboardShouldPersistTaps="handled"
        renderItem={({item, index}) => (
          <Sale index={index}>
            <SaleDesc>{item.desc}</SaleDesc>
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
