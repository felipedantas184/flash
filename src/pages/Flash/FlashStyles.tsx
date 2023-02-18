import styled from 'styled-components'
import { ScrollView, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props {
  backgroundColor: string;
}
interface HideProps {
  hide: boolean;
}

export const Container = styled(View)`
  background-color: #ECECEC;
  height: 100%;
`
export const Wrapper = styled(View)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
`
export const Question = styled(View)`
  background-color: #0E0E52;
  border-radius: 8px;
  padding: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Title = styled(Text)`
  flex: 1;
  text-align: center;
  color: #ECECEC;
  font-size: 17px;
  font-weight: 600;
`
export const Answer = styled(View)<HideProps>`
  display: ${props => props.hide ? 'none' : 'flex'};
  padding: 8px 4px;
  border-radius: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Subtitle = styled(Text)`
  flex: 1;
  text-align: center;
  color: #13131A;
  font-size: 15px;
  font-weight: 500;
`
export const Actions = styled(View)`
  flex-direction: row;
`
export const ButtonWrapper = styled(View)<HideProps>`
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
`
export const Levels = styled(View)<HideProps>`
  display: ${props => props.hide ? 'none' : 'flex'};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px;
`
export const Button = styled(TouchableOpacity)<Props>`
  background-color: ${props => props.backgroundColor};
  min-width: 80px;
  border-radius: 8px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  align-self: center;
`
export const ButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  color: #FFF;
`