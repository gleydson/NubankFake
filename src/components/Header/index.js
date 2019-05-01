import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';
import {
  Container, Top, Logo, Title,
} from './styled';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Gleydson</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
