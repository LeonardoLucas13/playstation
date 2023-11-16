import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Home from '../../screens/Home/Home'
import ListaDeJogos from '../../screens/ListaDeJogos/ListaDeJogos'
import Load from '../../screens/Load/Load'
import { useEffect, useState } from "react";
const Stack = createNativeStackNavigator<RootStack>();

export type RootStack = {
    Home: undefined;
    ListaDeJogos:undefined;
}

export function NativeStackNavigator(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 2000); 
    }, []);
  
    if (isLoading) {
      return <Load />;
    }

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