import styled from 'styled-components'
import { ScrollView, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled(ScrollView)`
  background-color: #ECECEC;
  height: 100%;
`
export const Wrapper = styled(View)`
  flex-direction: column;
  padding: 16px;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
`
export const Menu = styled(View)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`
export const Back = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`
export const MenuText = styled(Text)`
  color: #4C4C4C;
  font-size: 13px;
  font-weight: 500;
`
export const Flash = styled(View)`
  flex: 1;
  padding: 8px 4px;
  border-radius: 8px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled(Text)`
  flex: 1;
  color: #13131A;
  font-size: 13px;
  font-weight: 500;
`
export const Actions = styled(View)`
  flex-direction: row;
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