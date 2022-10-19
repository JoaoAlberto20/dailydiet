import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;


export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  border: 2px solid ${({ theme } ) => theme.COLORS.GRAY_600};
  object-fit: contain;
`


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