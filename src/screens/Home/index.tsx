import { useState } from 'react';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Plus } from 'phosphor-react-native';

import { Button } from '@components/Button';
import { CardStatistics } from '@components/CardStatistics';
import { ListEmpty } from '@components/ListEmpty';
import { MealsCard } from '@components/MealsCard';

import { useNavigation } from '@react-navigation/native';
import {
  Container, Header, Logo, MealsContainer, Profile, TextMeals
} from './styles';

import logoImg from '@assets/logo.png';
import profileImg from '@assets/profile.png';


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
  const {COLORS} = useTheme();
  
  const navigation = useNavigation();

  const handleOpenScreenRegisterDiet = () => navigation.navigate('new');

  const handleOpenScreenStaticsDiet = () => navigation.navigate('statics')

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>
      <CardStatistics
        type='PRIMARY'
        percent='90,86%'
        subTitle='das refeições dentro da dieta'
        onPress={handleOpenScreenStaticsDiet}
      />

      <TextMeals>Refeições</TextMeals>
      <Button 
        type="PRIMARY" 
        title="Nova refeição" 
        icon={
          <Plus 
            size={24} 
            color={COLORS.WHITE}
          />
        }
        onPress={handleOpenScreenRegisterDiet} 
      />
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