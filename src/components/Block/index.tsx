import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/AppStack";
import { Container, Title } from "./BlockStyles";

interface PageHeaderProps {
  title: string;
  navigateFurther: any;
}

const Block: React.FC<PageHeaderProps> = ({ title, navigateFurther }) => {
  return ( 
    <Container onPress={navigateFurther} >
      <Title>{title}</Title>
    </Container>
   );
}
 
export default Block;