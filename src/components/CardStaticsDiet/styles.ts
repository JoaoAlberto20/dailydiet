import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StylesCardStatisticsDiet = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StylesCardStatisticsDiet
}

export const Container = styled(View)<Props>`
  height: 107px;
  flex: 1;
  align-items: center;
  padding: 16px;
  border-radius: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === 'SECONDARY' ? theme.COLORS.RED_100 : theme.COLORS.GREEN_100};
    margin-left: ${type === 'SECONDARY' ? 12 : 0}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.XL }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
    text-align: center;
  `}
`

