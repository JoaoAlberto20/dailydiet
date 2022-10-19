import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex-basis: 0;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ theme, type }) => css`
    background-color: ${type === 'SECONDARY' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_700};
    border: ${type === 'SECONDARY' ? `1px solid ${theme.COLORS.GRAY_700}` : 'none'};
  `}
`;


export const TextContent = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-left: 14px; 

  ${({ theme, type }) => type === 'SECONDARY' && css`
    color: ${theme.COLORS.GRAY_700};
  `}
`

