import React from 'react';
import {
  Container, StylesCardStatisticsDiet, Subtitle, Title
} from './styles';

type CardStaticsDietProps = {
  number: number
  text: string
  type: StylesCardStatisticsDiet
}

export function CardStaticsDiet({ number, text, type}: CardStaticsDietProps) {
  return (
    <Container type={type}>
      <Title>{number}</Title>
      <Subtitle>{text}</Subtitle>
    </Container>
  );
}