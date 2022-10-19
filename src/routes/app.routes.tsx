import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '@screens/Home'
import { RegisterDiet } from '@screens/RegisterDiet'
import { Statics } from '@screens/Statics'


const { Navigator, Screen} = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new"  component={RegisterDiet} />
      <Screen name="statics" component={Statics} />
    </Navigator>
  )
}