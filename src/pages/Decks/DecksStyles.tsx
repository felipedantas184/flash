import styled from 'styled-components'
import { ScrollView, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled(ScrollView)`
  background-color: #ECECEC;
  height: 100%;
`
export const Wrapper = styled(View)`
  flex-direction: row;
  padding: 16px;
  width: 100%;
  flex: 2;
  flex-wrap: wrap;
`
export const Button = styled(TouchableOpacity)`
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