import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import { RootStackParamList } from '../../routes/AppStack';
import { Actions, Answer, Button, ButtonText, ButtonWrapper, Container, Levels, Question, Subtitle, Title, Wrapper } from './FlashStyles';
import { Feather } from '@expo/vector-icons'

function Flash() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  function NavigateToFlashs() {
    navigate('Flashs');
  }

  const [hide, setHide] = useState(true)

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }} >
      <Container>
        <Header title='Flash' subtitle='Total de 48 Flash encontrados!' icon={<Feather name='x-circle' size={48} color='#EB5757' />} navigateFurther={NavigateToFlashs} />
        <Wrapper>
          <Question>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
          </Question>
          <Answer hide={hide} >
            <Subtitle>Inflamação Crônica / HPV / Fimose / Tabagismo / Pobreza / Promiscuidade</Subtitle>
          </Answer>
        </Wrapper>
        <ButtonWrapper hide={!hide}>
          <Button onPress={() => setHide(!hide)} backgroundColor="#0E0E52">
            <ButtonText>Mostrar Resposta</ButtonText>
          </Button>
        </ButtonWrapper>
        <Levels hide={hide} >
          <Button onPress={() => setHide(!hide)} backgroundColor="#219653">
            <ButtonText>Fácil</ButtonText>
          </Button>
          <Button onPress={() => setHide(!hide)} backgroundColor="#EB5757">
            <ButtonText>Médio</ButtonText>
          </Button>
          <Button onPress={() => setHide(!hide)} backgroundColor="#0E0E52">
            <ButtonText>Difícil</ButtonText>
          </Button>
        </Levels>
      </Container>
    </SafeAreaView>
  )
}

export default Flash;