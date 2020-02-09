import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #cfcfcf;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const ProductList = styled.FlatList`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 20px;
`;
export const Product = styled(RectButton)`
  background-color: #bccbff;
  border-radius: 10px;
  min-height: 100px;
  margin-top: 10px;
  padding: 15px;
`;
export const ProductName = styled.Text`
  color: #4743ff;
  font-weight: bold;
  font-size: 16px;
`;

export const ProductBrand = styled.Text`
  color: #2d2d2d;
  font-weight: bold;
  font-size: 16px;
`;
export const ProductDescription = styled.Text`
  color: #4e4bf2;
  font-weight: normal;
  font-size: 14px;
  margin-top: 5px;
`;
export const DefaultButton = styled(RectButton)`
  background-color: #88a9ff;
  border-radius: 10px;
  height: 40px;
  width: 260px;
  padding: 7px 40px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;
export const DefaultButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
