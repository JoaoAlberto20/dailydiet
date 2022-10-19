
import { Button } from '@components/Button';
import { ButtonDiet } from '@components/ButtonDiet';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { useState } from 'react';
import { FlatList } from 'react-native';

import {
  Container,
  ContentInputDateHour,
  Form,
  TextIsDiet
} from './styles';

export function RegisterDiet() {
  const [diet, setDiet] = useState('');

  return (
    <Container>
      <Header title="Nova refeição"/>
      <Form>
        <Input
          type="PRIMARY"
          label='Nome'
        />
        <Input
          type="SECONDARY"
          label='Descrição'
          multiline={true}
          numberOfLines={4}
        />
        <ContentInputDateHour>
          <Input type="PRIMARY" label='Data' />
          <Input type="PRIMARY" label='Hora' />
        </ContentInputDateHour>

        <TextIsDiet>Está dentro da dieta?</TextIsDiet>
        <FlatList
          data={['Sim', 'Não']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ButtonDiet
              title={item}
              diet={item}
            />
          )}
          numColumns={2}
        />

        <Button
          title="Cadastrar refeição"
          type='PRIMARY'
        />

      </Form>
    </Container >
  );
}


