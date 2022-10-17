import { Button } from '@components/Button';
import { CardStatistics } from '@components/CardStatistics';
import { Header } from '@components/Header';
import { ListEmpty } from '@components/ListEmpty';
import { MealsCard } from '@components/MealsCard';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import {
  Container, MealsContainer, TextMeals
} from './styles';


const data = [
  {
    createAt_Meals: '12.08.22',
    meals: [
      {
        hour: '20:00',
        name: 'X-tudo',
        description: 'Xis completo da lancheira do bairro',
        isDiet: false,
      },
      {
        hour: '16:00',
        name: 'Sanduíche',
        description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
        isDiet: true,
      },
      {
        hour: '12:30',
        name: 'Vitamina',
        description: 'Whey protein com leite.',
        isDiet: true,
      },
      {
        hour: '09:30',
        name: 'Salada',
        description: 'Salada cesar com frango grelhado',
        isDiet: true,
      },
    ]
  },
  {
    createAt_Meals: '11.08.22',
    meals: [
      {
        hour: '20:00',
        name: 'X-tudo',
        description: 'Xis completo da lancheira do bairro',
        isDiet: false,
      },
      {
        hour: '16:00',
        name: 'Sanduíche',
        description: 'Sanduíche de pão integral com atum e salada de alface e tomate',
        isDiet: true,
      },
      {
        hour: '12:30',
        name: 'Vitamina',
        description: 'Whey protein com leite.',
        isDiet: true,
      },
      {
        hour: '09:30',
        name: 'Salada',
        description: 'Salada cesar com frango grelhado',
        isDiet: true,
      },
      {
        hour: '09:30',
        name: 'Salada',
        description: 'Salada cesar com frango grelhado',
        isDiet: true,
      },
    ]
  }
]

type MealsData = {
  createAt_Meals: string
  meals: {
    hour: string,
    name: string,
    description: string,
    isDiet: boolean,
  }[]
}

export function Home() {
  const [meals, setMeals] = useState<MealsData[]>([])
  return (
    <Container>
      <Header />

      <CardStatistics
        type='PRIMARY'
        percent='90,86%'
        subTitle='das refeições dentro da dieta'
      />

      <TextMeals>Refeições</TextMeals>
      <Button type="PRIMARY" title="Nova refeição" />
      <MealsContainer>
        <FlatList
          data={meals}
          keyExtractor={(meal) => meal.createAt_Meals}
          renderItem={({ item }) => (
            <MealsCard
              key={item.createAt_Meals}
              createdAt_Meals={item.createAt_Meals}
              meals={item.meals}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty
              message="Não há refeições cadastrada."
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100,  },
            meals.length === 0 && {flex: 1}
          ]}
        />
      </MealsContainer>
    </Container >
  );
}