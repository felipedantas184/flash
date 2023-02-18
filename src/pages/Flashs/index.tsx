import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import Header from '../../components/Header';
import { RootStackParamList } from '../../routes/AppStack';
import { Actions, Button, ButtonText, Container, Flash, Title, Wrapper } from './FlashsStyles';
import { Feather } from '@expo/vector-icons'

function Flashs() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  function NavigateToFlash() {
    navigate('Flash');
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }} >
      <Container>
        <Header title='Flashs' subtitle='Total de 48 Flashs encontrados!' icon={<Feather name='play-circle' size={48} color='#219653' />} navigateFurther={NavigateToFlash}/>
        <Wrapper>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
          <Flash>
            <Title>Quais os principais fatores de risco para câncer de pênis?</Title>
            <Actions><TouchableOpacity><Feather name="edit" size={17} color="#44444A" style={{ marginRight: 8 }} /></TouchableOpacity><TouchableOpacity><Feather name="x-circle" size={17} color="#EB5757" /></TouchableOpacity></Actions>
          </Flash>
        </Wrapper>
        <Button onPress={NavigateToFlash} >
          <ButtonText>Adicionar Flash</ButtonText>
        </Button>
      </Container>
    </SafeAreaView>
  )
}

export default Flashs;