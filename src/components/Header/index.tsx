import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Container, Heading, Subtitle, Title } from './HeaderStyles';


interface PageHeaderProps {
  title: string;
  subtitle: string;
  icon?: any;
  navigateFurther?: any;
}

const Header: React.FC<PageHeaderProps> = ({ title, subtitle, icon, navigateFurther }) => {
  return ( 
    <Container>
      <Heading>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Heading>
      <TouchableOpacity onPress={navigateFurther} >
        {icon}
      </TouchableOpacity>
    </Container>
   );
}

export default Header;