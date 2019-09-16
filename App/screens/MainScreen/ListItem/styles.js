import styled from 'styled-components/native';

export const ItemView = styled.View`
  padding: 2px;
  border-radius: 30px;
  min-width: 60px;
  min-height: 60px;
  background-color: ${props => (props.using ? '#757575' : '#FFFFFF')};
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

export const ItemText = styled.Text`
  font-size: 20px;
  color: ${props => (props.using ? '#FFFFFF' : '#000000')};
`;
