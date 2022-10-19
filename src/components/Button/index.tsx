import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  ButtonTypeStyleProps,
  Container,
  TextContent
} from './styles';


type ButtonProps = TouchableOpacityProps & {
  title: string
  type: ButtonTypeStyleProps
  icon?: ReactNode
} 

export function Button({type, title, icon ,...rest}: ButtonProps) {
 
  return (
    <Container type={type} {...rest}>
      { icon }
      <TextContent type={type}>{title}</TextContent>
    </Container>
  );
}