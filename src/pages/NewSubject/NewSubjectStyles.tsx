import styled from 'styled-components'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled(View)`
  background-color: #ECECEC;
  height: 100%;
  justify-content: space-between;
`
export const Wrapper = styled(View)`
  flex: 1;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  flex-wrap: wrap;
`
export const Group = styled(View)`
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`
export const Label = styled(Text)`
  color: #13131A;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 8px;
`
export const Input = styled(TextInput)`
  width: 100%;
  padding: 8px 16px;
  color: #13131A;
  font-size: 17px;
  border-radius: 8px;
  background-color: #D4D4D4;
`
export const Button = styled(TouchableOpacity)`
  width: 100%;
  background-color: #0E0E52;
  border-radius: 8px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  align-self: center;
  margin-bottom: 16px;
`
export const ButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  color: #FFF;
`