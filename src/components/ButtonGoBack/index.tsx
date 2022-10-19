import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  Container
} from './styles';

type ButtonGoBackProps = TouchableOpacityProps & {
  type?: 'PRIMARY' | 'SECONDARY'
}

export function ButtonGoBack({ type, ...rest }: ButtonGoBackProps) {
  return (
    <Container {...rest} >
      <ArrowLeft size={24} weight="bold"/>
    </Container>
  );
}