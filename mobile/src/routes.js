import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/incidents';
import Detail from './pages/detail';
import { NavigationContainer } from '@react-navigation/native';

export default function Routes(){
    return(
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="incidents" component={Incidents}/>
                <AppStack.Screen name="detail" component={Detail}/>
            </AppStack.Navigator>

        </NavigationContainer>


    )
}