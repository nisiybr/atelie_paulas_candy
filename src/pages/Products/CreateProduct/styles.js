import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  background-color: #cfcfcf;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Form = styled.View`
  background-color: #ececec;
  padding: 25px;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
  min-height: 400px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #323232;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
})`
  background: #f7f7f7;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 9px;
  font-size: 16px;
  padding: 12px;
  color: #7c7c7c;
  margin-bottom: 16px;
`;

export const InputMulti = styled.TextInput.attrs({
  numberOfLines: 3,
  multiline: true,
  autoCorrect: false,
})`
  background: #f7f7f7;
  width: 100%;
  border: 1px solid #dddddd;
  border-radius: 9px;
  font-size: 16px;
  padding: 12px;
  color: #7c7c7c;
  text-align-vertical: top;
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
`;
export const DefaultButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
