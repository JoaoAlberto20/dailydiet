import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
  ButtonTypeStyleProps,
  Container,
  Icon,
  TextPercent,
  TextSubTitle
} from './styles';


type ButtonPercentProps = TouchableOpacityProps & {
  type: ButtonTypeStyleProps
  percent: string;
  subTitle: string
}

export function CardStatistics({ type = 'PRIMARY', percent, subTitle, ...rest}: ButtonPercentProps) {
  return (
    <Container type={type} {...rest}> 
      <Icon name="north-east" type={type}/>
      <TextPercent>{percent}</TextPercent>
      <TextSubTitle>{subTitle}</TextSubTitle>
    </Container>
  );
}