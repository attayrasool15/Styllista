import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, BlogScreen, ProfileScreen, CalendarScreen } from '../screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors/colors';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
  const icons = {
    Home: focused ? 'home' : 'home-filled',
    Blog: focused ? 'article' : 'article-outline',
    Calendar: focused ? 'calendar-today' : 'calendar-today-outline',
    Profile: focused ? 'person' : 'person-outline',
  };
  return <Icon name={icons[route.name]} size={size} color={color} />;
},
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMedium,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Blog" component={BlogScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;