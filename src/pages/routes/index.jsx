 import {NavigationContainer} from '@react-navigation/native'
 import {createNativeStackNavigator} from '@react-navigation/native-stack'
 import { Detail } from '../Detail'
 import { Home } from '../Home'

 const {Navigator, Screen} = createNativeStackNavigator()

 export function Routes (){
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name ="Users" component={Home}/>
                <Screen name ="detail" component={Detail}/>
            </Navigator>
        </NavigationContainer>
    )
 }