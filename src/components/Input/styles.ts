import { TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type InputStylesProps = {
  type: 'PRIMARY' | 'SECONDARY'
}


export const Container = styled(View)<InputStylesProps>`
  flex: 1;
  margin-top: 24px;

  min-height: 70px;
  max-height: 70px;

  ${({ type }) => type === 'SECONDARY' && css`
    min-height: 142px;
    max-height: 142px;
  `}
  justify-content: center;
`

export const Label = styled.Text`
  margin-bottom: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const InputText = styled(TextInput)<InputStylesProps>`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;

  
  color: ${({theme}) => theme.COLORS.GRAY_700};
  font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};

  padding: 14px;
  min-height: 48px;
  max-height: 48px;

  ${({ type }) => type === 'SECONDARY' && css`
    min-height: 120px;
    max-height: 120px;
  `}
`
