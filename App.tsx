import { Loading } from '@components/Loading';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Routes } from '@routes/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  }) 

  return (
    <ThemeProvider theme={themes}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading /> } 
    </ThemeProvider>
  );
}

