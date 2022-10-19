import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300}
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.05);
  padding: 30px 24px 30px 24px;
`

export const ContentInputDateHour = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`

export const TextIsDiet = styled.Text`
  margin-bottom: 4px;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

