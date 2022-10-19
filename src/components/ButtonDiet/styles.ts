import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';


type StatusDiet = {
  type: string
}

export const Container = styled(TouchableOpacity)<StatusDiet>`
  height: 50px;
  flex-grow: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200 };
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200 };
  border-radius: 6px;
  
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${({ theme, type }) => type && css`
    background-color: ${type === 'Sim' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
    border-color: ${type === 'Sim' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  `}
`;

export const TextButton = styled.Text`
  margin-left: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700}
  `}
`;

export const StatusDiet = styled(View)<StatusDiet>`
  width: 8px;
  height: 8px;
  background-color: ${({ theme, type }) => type === 'Sim' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700 };
  border-radius: 999px;
`

