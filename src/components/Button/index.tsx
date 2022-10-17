import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  ButtonTypeStyleProps,
  Container,
  TextContent
} from './styles';


type ButtonProps = TouchableOpacityProps & {
  title: string
  type: ButtonTypeStyleProps
} 

export function Button({type, title, ...rest}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <TextContent type={type}>{title}</TextContent>
    </Container>
  );
}