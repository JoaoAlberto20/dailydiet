import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type HeaderStylesProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: HeaderStylesProps | null
}

export const Container = styled(View)<Props>`
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300}


  ${({ theme, type }) => type && css`
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100 };
  `}
`;

export const TitleScreen = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

