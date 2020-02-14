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
`;
export const Item = styled.View.attrs({
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
  min-height: 40px;
  flex-direction: row;
`;
export const ItemButton = styled(RectButton)`
  flex: 1;
  height: 100px;
  padding: 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ItemTextName = styled.Text`
  color: #323232;
  font-weight: bold;
  font-size: 16px;
  width: 150px;
`;
export const LabelView = styled.View`
  justify-content: center;
  margin-left: 20px;
`;
export const ValueView = styled.View`
  justify-content: center;
  flex: 1;
`;
export const LabelText = styled.Text`
  color: #4743ff;
  font-weight: bold;
  font-size: 16px;
  text-align: left;
`;
export const ItemTextButton = styled.Text`
  color: #4743ff;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

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
