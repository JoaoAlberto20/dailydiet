import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}


export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  
  ${({ theme, type }) =>   css`
    background-color: ${type === 'SECONDARY' ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_700};
    border: ${ type === 'SECONDARY' ? `1px solid ${theme.COLORS.GRAY_700}` : 'none' };
  `}
`;


export const TextContent = styled.Text<Props>`
  margin-left: 14px;
  
  ${({ theme, type }) =>  css`
    color: ${type === 'SECONDARY' ? theme.COLORS.GRAY_700 : theme.COLORS.GRAY_100 };
    font-size: ${theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`