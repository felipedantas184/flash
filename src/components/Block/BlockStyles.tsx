import styled from "styled-components";
import { View, Text, TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  background-color: #449DD1;
  min-width: 130px;
  max-width: 47.5%;
  height: 100px;
  flex: 1;
  padding: 8px;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 8px;
  
  margin-bottom: 16px;
  margin-right: 4px;
  margin-left: 4px;
`
export const Title = styled(Text)`
  color: #000;
  font-size: 15px;
  font-weight: 500;
`