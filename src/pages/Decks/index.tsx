import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'
import Block from '../../components/Block';
import Header from '../../components/Header';
import { RootStackParamList } from '../../routes/AppStack';
import { Back, Button, ButtonText, Container, Menu, MenuText, Wrapper } from './DecksStyles';
import { Feather } from '@expo/vector-icons'

function Decks() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  
  function NavigateToHome() {
    navigate('Home');
  }
  function NavigateToFlashs() {
    navigate('Flashs');
  }
  function NavigateToNewDeck() {
    navigate('NewDeck');
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}} >
      <Container>
        <Header title='Decks' subtitle='Decks de Urologia!' icon={<Feather name='arrow-left-circle' size={48} color='#ECECEC' />} navigateFurther={NavigateToHome} />
        <Wrapper>
          <Menu>
            <Back onPress={NavigateToHome} >
              <Feather name='arrow-left' size={16} color="#4C4C4C" style={{marginRight: 8}} />
              <MenuText>Matérias</MenuText>
            </Back>
            <MenuText>Urologia</MenuText>
          </Menu>
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
        <Button onPress={NavigateToNewDeck} >
          <ButtonText>Adicionar Deck</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Decks;