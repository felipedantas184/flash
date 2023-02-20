import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import Header from "../../components/Header";
import { RootStackParamList } from "../../routes/AppStack";
import { Button, ButtonText, Container, Group, Input, Label, Wrapper } from "./NewFlashStyles";
import { Feather } from '@expo/vector-icons'

function NewFlash() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  function NavigateToFlashs() {
    navigate('Flashs');
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}}>
      <Container >
        <Header title='Novo Flash' subtitle='Edite o seu  novo flash!' icon={<Feather name='arrow-left-circle' size={48} color='#ECECEC' />} navigateFurther={NavigateToFlashs}  />
        <Wrapper>
          <Group>
            <Label>Pergunta</Label>
            <Input placeholder="Digite a sua pergunta" />
          </Group>
          <Group>
            <Label>Resposta</Label>
            <Input placeholder="Digite a resposta do flash" multiline={true} />
          </Group>
        </Wrapper>
        <Button onPress={NavigateToFlashs}>
          <ButtonText>Finalizar</ButtonText>
        </Button>      
      </Container>
    </SafeAreaView>
  )
}

export default NewFlash