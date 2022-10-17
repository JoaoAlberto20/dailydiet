import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 32px;
`;

export const TitleDate = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({theme}) =>theme.COLORS.GRAY_300};
`;

export const ContainerHourName = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const TextHour = styled.Text`
  margin-right: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

`

export const TextName = styled.Text`
  width: 50px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

type Props = {
  isDiet: boolean
}

export const StatusDiet = styled(View)<Props>`
  width: 14px;
  height: 14px;
  background-color: ${({ theme, isDiet }) => isDiet ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300 };
  border-radius: 999px;
`

