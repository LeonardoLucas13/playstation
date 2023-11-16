import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native';
import Home from '../screens/Home/Home'
import ListaDeJogos from '../screens/ListaDeJogos/ListaDeJogos'

const Tab = createBottomTabNavigator()
export default function TabRoutes(){
    return(
        <Tab.Navigator screenOptions={{ headerShown: false}} >
           <Tab.Screen
        name="Home"
        component={Home}
      />

            <Tab.Screen 
            name="Lista de jogos" 
            component={ListaDeJogos} 
            />

        </Tab.Navigator>
    )
}