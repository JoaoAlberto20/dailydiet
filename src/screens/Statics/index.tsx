import { ButtonGoBack } from '@components/ButtonGoBack';
import { CardStaticsDiet } from '@components/CardStaticsDiet';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTheme } from 'styled-components/native';
import {
  Container,
  ContainerStaticsMeals,
  ContentStaticsDiet,
  HeaderStatics,
  Main,
  NumberStaticsMeals,
  TextStaticsMeals,
  TextSubTitleHeaderStatics,
  TitlePercentHeaderStatics,
  TitleStatics
} from './styles';

export function Statics() {
  const {COLORS} = useTheme()
  const navigation = useNavigation()
  const handleGoBackScreenHome = () => navigation.navigate('home')

  return (
    <Container type='PRIMARY'>
      <HeaderStatics type="PRIMARY">
        <ButtonGoBack onPress={handleGoBackScreenHome} />
        <TitlePercentHeaderStatics>
          90,86%
        </TitlePercentHeaderStatics>
        <TextSubTitleHeaderStatics>
          das refeições dentro da dieta
        </TextSubTitleHeaderStatics>
      </HeaderStatics>

      <Main>
        <TitleStatics>Estatísticas gerais</TitleStatics>

        <ContainerStaticsMeals>
          <NumberStaticsMeals>22</NumberStaticsMeals>
          <TextStaticsMeals>
            melhor sequência de pratos dentro da dieta
          </TextStaticsMeals>
        </ContainerStaticsMeals>


        <ContainerStaticsMeals>
          <NumberStaticsMeals>109</NumberStaticsMeals>
          <TextStaticsMeals>
            refeições registradas
          </TextStaticsMeals>
        </ContainerStaticsMeals>

        <ContentStaticsDiet>
          <CardStaticsDiet 
            type="PRIMARY" 
            text="refeições dentro da dieta"
            number={99}
          />
          <CardStaticsDiet 
            type="SECONDARY" 
            text="refeições fora da dieta"
            number={10}
          />
        </ContentStaticsDiet>
        
      </Main>

    </Container>
  );
}