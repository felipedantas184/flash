import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import Header from "../../components/Header";
import { RootStackParamList } from "../../routes/AppStack";
import { Button, ButtonText, Container, Group, Input, Label, Wrapper } from "./NewDeckStyles";
import { Feather } from '@expo/vector-icons'

function NewDeck() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  function NavigateToDecks() {
    navigate('Decks');
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}}>
      <Container >
        <Header title='Novo Deck' subtitle='Adicione um novo deck!' icon={<Feather name='arrow-left-circle' size={48} color='#ECECEC' />} navigateFurther={NavigateToDecks}  />
        <Wrapper>
          <Group>
            <Label>Nome do Deck</Label>
            <Input placeholder="Digite o nome do deck" />
          </Group>
          <Group>
            <Label>Ícone</Label>
            <Input placeholder="Selecione um ícone para o deck" />
          </Group>
          <Group>
            <Label>Cor</Label>
            <Input placeholder="Selecione uma cor para o deck" />
          </Group>
        </Wrapper>
        <Button onPress={NavigateToDecks} >
          <ButtonText>Finalizar</ButtonText>
        </Button>      
      </Container>
    </SafeAreaView>
  )
}

export default NewDeck