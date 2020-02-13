import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  behaviour: 'padding',
})`
  background-color: #ececec;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const Form = styled.View`
  background-color: #ececec;
  align-items: center;
  width: 100%;
`;

export const Label = styled.Text`
  margin-top: 8px;
  margin-left: 22px;
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #323232;
  width: 100%;
  text-align: left;
`;

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
})`
  background: #f7f7f7;
  width: 100%;
  border: 1px solid #dddddd;
  font-size: 16px;
  padding: 6px 20px;
  color: #7c7c7c;
  margin-bottom: 8px;
`;

export const SalesItems = styled.FlatList`
  width: 100%;
  background-color: #fff;
  flex: 1;
`;
export const Item = styled.View``;
export const TextItem = styled.Text;

export const DefaultButton = styled(RectButton)`
  background-color: ${props => (props.index % 2 === 0 ? '#009229' : '#2151cb')};
  height: 50px;
  width: 100%;
  padding: 7px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const DefaultButtonText = styled.Text`
  color: #ffffff;
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
`;
