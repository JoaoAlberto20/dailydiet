import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  min-height: 102px;
  max-height: 102px;
  width: 100%;
  padding: 20px 16px;
  border-radius: 8px;
  align-items: center;
  

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type}) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
}))`
  position: absolute;
  right: 13.25px;
  top: 13.25px;
`

export const TextPercent = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE['2XL'] }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TextSubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
    
  `}
` 


