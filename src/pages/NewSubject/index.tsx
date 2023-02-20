import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SafeAreaView, StatusBar, Text } from "react-native";
import Header from "../../components/Header";
import { RootStackParamList } from "../../routes/AppStack";
import { Button, ButtonText, Container, Group, Input, Label, Wrapper } from "./NewSubjectStyles";
import { Feather } from '@expo/vector-icons'

function NewSubject() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  function NavigateToHome() {
    navigate('Home');
  }

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight}}>
      <Container >
        <Header title='Nova Matéria' subtitle='Adicione uma nova matéria!' icon={<Feather name='arrow-left-circle' size={48} color='#ECECEC' />} navigateFurther={NavigateToHome}  />
        <Wrapper>
          <Group>
            <Label>Matéria</Label>
            <Input placeholder="Digite o nome da matéria" />
          </Group>
          <Group>
            <Label>Ícone</Label>
            <Input placeholder="Selecione um ícone para a matéria" />
          </Group>
          <Group>
            <Label>Cor</Label>
            <Input placeholder="Selecione uma cor para a matéria" />
          </Group>
        </Wrapper>
        <Button onPress={NavigateToHome} >
          <ButtonText>Finalizar</ButtonText>
        </Button>      
      </Container>
    </SafeAreaView>
  )
}

export default NewSubject