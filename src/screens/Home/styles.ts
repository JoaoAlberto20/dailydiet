import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;



export const TextMeals = styled.Text`
  margin-bottom: 8px;
  margin-top: 40px;
  ${({ theme } ) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${ theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  `}
`

export const MealsContainer = styled.View`
  margin-top: 40px;
  flex: 1;
`  
