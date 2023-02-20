import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StatusBar, SafeAreaView } from 'react-native'
import Block from '../../components/Block';
import Header from '../../components/Header';
import { Button, ButtonText, Container, Wrapper } from './HomeStyles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/AppStack';

function Home() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  function NavigateToDecks() {
    navigate('Decks');
  }
  function NavigateToNewSubject() {
    navigate('NewSubject');
  }
  
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}} >
      <Container>
        <Header title='Matérias' subtitle='As suas matérias estão aqui!' />
        <Wrapper>
          <Block title='Urologia' navigateFurther={NavigateToDecks} />
          <Block title='Otorrino' navigateFurther={NavigateToDecks} />
          <Block title='Ortopedia' navigateFurther={NavigateToDecks} />
          <Block title='Geriatria' navigateFurther={NavigateToDecks} />
        </Wrapper>
        <Button onPress={NavigateToNewSubject} >
          <ButtonText>Adicionar Matéria</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Home;