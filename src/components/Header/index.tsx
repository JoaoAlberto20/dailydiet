import { ButtonGoBack } from '@components/ButtonGoBack';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container, HeaderStylesProps, TitleScreen
} from './styles';


type HeaderProps = {
  type?: HeaderStylesProps | null
  title: string
}

export function Header({ type = null, title }: HeaderProps) {
  const navigation = useNavigation()

  const handleGoBackScreenHome = () => navigation.navigate('home')

  return (
    <Container type={type}>
      <ButtonGoBack onPress={handleGoBackScreenHome} />
      <TitleScreen>
        {title}
      </TitleScreen>
    </Container>
  );
}