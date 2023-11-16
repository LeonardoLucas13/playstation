import { NavigationContainer} from '@react-navigation/native'
import { NativeStackNavigator } from './Stake'

export default function Routes(){
    return(
        <NavigationContainer>
            <NativeStackNavigator/>
        </NavigationContainer>
    )
}