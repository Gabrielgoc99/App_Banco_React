import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Conta from './Conta';
import Ajuda from './Ajuda';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Styles from './Componentes/Styles'


const Tab = createBottomTabNavigator();
export default function Route() {
  return (
<NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'planet-outline'
                : 'home-outline';
            } else if (route.name === 'Conta') {
              iconName = focused ? 'settings-outline' : 'aperture-outline';
            } else if (route.name === 'Ajuda') {
              iconName = focused ? 'information-outline' : 'information-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#890907',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Conta" component={Conta} />
        <Tab.Screen name="Ajuda" component={Ajuda} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}