import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type HeaderStaticsProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: HeaderStaticsProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`;


export const HeaderStatics = styled(View)<Props>`
  align-items: center;
  justify-content: center;
  padding: 24px 24px 34px 24px;


  ${({ theme, type }) => css`
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  `}
`;

export const TitlePercentHeaderStatics = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE['2XL'] }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`;

export const TextSubTitleHeaderStatics = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const Main = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.05);
  padding: 33px 24px 30px 24px;
  text-align: center;
`

export const TitleStatics = styled.Text`
  text-align: center;
  margin-bottom: 23px;
  
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const ContainerStaticsMeals = styled.View`
  width: 100%;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 89px;
`

export const NumberStaticsMeals = styled.Text`
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.XL }px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const TextStaticsMeals = styled.Text`
  margin-top: 8px;
  ${({ theme }) => css`
    font-size: ${ theme.FONT_SIZE.SM }px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const ContentStaticsDiet = styled.View`
  flex-direction: row;
` 
