import { TouchableOpacityProps } from 'react-native';
import {
  Container, StatusDiet, TextButton
} from './styles';

type ButtonDietProps = TouchableOpacityProps & {
  title: string
  diet: string
}

export function ButtonDiet({ title, diet,...rest}: ButtonDietProps) {
  return (
    <Container 
      type={diet}
      style={{ marginLeft: title === 'Não' ? 8 : 0}}
      {...rest}
    >
      <StatusDiet type={title} />
      <TextButton>{title}</TextButton>
    </Container>
  );
}