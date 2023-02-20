import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import { RootStackParamList } from '../../routes/AppStack';
import { Actions, Back, Button, ButtonText, Container, Flash, Menu, MenuText, Title, Wrapper } from './FlashsStyles';
import { Feather } from '@expo/vector-icons'

function Flashs() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  function NavigateToDecks() {
    navigate('Decks');
  }
  function NavigateToFlash() {
    navigate('Flash');
  }
  function NavigateToNewFlash() {
    navigate('NewFlash');
  }
  function NavigateToEditFlash() {
    navigate('EditFlash')
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }} >
      <Container>
        <Header title='Flashs' subtitle='Total de 48 Flashs encontrados!' icon={<Feather name='play-circle' size={48} color='#219653' />} navigateFurther={NavigateToFlash}/>
        <Wrapper>
          <Menu>
            <Back onPress={NavigateToDecks} >
              <Feather name='arrow-left' size={16} color="#4C4C4C" style={{marginRight: 8}} />
              <MenuText>Unidade I</MenuText>
            </Back>
            <MenuText>Urologia</MenuText>
          </Menu>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity onPress={NavigateToEditFlash} ><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
        </Wrapper>
        <Button onPress={NavigateToNewFlash} >
          <ButtonText>Adicionar Flash</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Flashs;