import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #c5cae9;
  justify-content: center;
  padding: 20px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const Info = styled.Text`
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  margin-top: -200px;
`;

export const Header = styled.View`
  display: flex;
  align-self: stretch;
  padding: 30px 10px 10px;
  background-color: #3f51b5;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput.attrs({
  keyboardType: 'number-pad',
})`
  display: flex;
  height: 44px;
  background-color: #ffffff;
  font-size: 20px;
  border-radius: 10px;
  text-align: center;
  align-self: stretch;
`;

export const SelectSort = styled.Picker`
  height: 50px;
  width: 200px;
`;

export const Confirm = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  right: 0px;
  left: 0px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Reset = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 0px;
  left: 0px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ConfirmText = styled.Text`
  font-size: 25px;
`;
