import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import Block from '../../components/Block';
import Header from '../../components/Header';
import { RootStackParamList } from '../../routes/AppStack';
import { Button, ButtonText, Container, Wrapper } from './DecksStyles';

function Decks() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  function NavigateToFlashs() {
    navigate('Flashs');
  }
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}} >
      <Container>
        <Header title='Decks' subtitle='Decks de Urologia!' />
        <Wrapper>
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
          <Block title='Urologia' navigateFurther={NavigateToFlashs} />
        </Wrapper>
        <Button onPress={NavigateToFlashs} >
          <ButtonText>Adicionar Deck</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Decks;