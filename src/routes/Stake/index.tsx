import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../../screens/Home/Home'
import ListaDeJogos from '../../screens/ListaDeJogos/ListaDeJogos'
const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {
    Home: undefined;
    ListaDeJogos:undefined;
}

export function NativeStackNavigator(){
    return(
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="ListaDeJogos" component={ListaDeJogos}/>
        </Stack.Navigator>
    )
}