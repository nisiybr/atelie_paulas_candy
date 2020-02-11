import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #cfcfcf;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const ProductList = styled.FlatList`
  width: 100%;
  background-color: #fff;
`;
export const Product = styled.View.attrs({
  elevation: 5,
  shadowOpacity: 0.7,
  shadowRadius: 3.84,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowColor: '#000',
})`
  background-color: ${props => (props.index % 2 === 0 ? '#bccbff' : '#C1C1C1')};
  min-height: 100px;
  flex-direction: row;
`;
export const ProductButton = styled(RectButton)`
  flex: 1;
  padding: 10px 15px;
`;
export const DeleteButton = styled(RectButton)`
  padding: 0px 10px;
  align-items: center;
  justify-content: center;
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
  background-color: #2151cb;
  height: 50px;
  width: 100%;
  padding: 7px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DefaultButtonText = styled.Text`
  color: #ffffff;
  margin-left: 20px;
  font-weight: bold;
  font-size: 16px;
`;
