import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #cfcfcf;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;
export const SalesList = styled.FlatList`
  width: 100%;
  background-color: #fff;
`;
export const Sale = styled.View.attrs({
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
export const SaleDesc = styled.Text`
  color: #4743ff;
  font-weight: bold;
  font-size: 16px;
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
