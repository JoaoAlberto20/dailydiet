import { TextInputProps } from 'react-native';
import {
  Container,
  InputText,
  Label
} from './styles';

type InputProps = TextInputProps & {
  type: 'PRIMARY' | 'SECONDARY'
  label: string
}

export function Input({ type = 'PRIMARY', label, ...rest  }: InputProps) {
  return (
    <Container 
      type={type} 
      style={{ marginLeft: label === 'Hora' ? 20 : 0 }}
    >
      <Label>{label}</Label>
      <InputText
        type={type}
        style={{ textAlignVertical: 'top' }}
        {...rest}
      />
    </Container>
  );
}