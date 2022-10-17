import React from 'react';
import {
  Card,
  Container,
  ContainerHourName,
  StatusDiet,
  TextHour,
  TextName,
  TitleDate
} from './styles';

type MealsData = {
  hour: string,
  name: string,
  description: string,
  isDiet: boolean,
}

type MealsCardProps = {
  createdAt_Meals: string;
  meals: MealsData[]
}

export function MealsCard({ createdAt_Meals, meals }: MealsCardProps) {
  return (
    <Container>
      <TitleDate>{createdAt_Meals}</TitleDate>
      {meals.map((meal, index) => (
        <Card key={index}>
          <ContainerHourName>
            <TextHour>{meal.hour}</TextHour>
            <TextName>{meal.name}</TextName>
          </ContainerHourName>
          <StatusDiet isDiet={meal.isDiet}/>
        </Card>
      ))}
    </Container>
  );
}