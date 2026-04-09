import React from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FollowingScreen from '../screens/FollowingScreen';
import ForYouScreen from '../screens/ForYouScreen';
import CommentsScreen from '../screens/CommentsScreen';

const Top = createMaterialTopTabNavigator();
const Bottom = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Top.Navigator
      initialRouteName="ForYou"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 40,
          left: 80,
          right: 80,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          zIndex: 10,
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#fff',
          height: 2,
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '700',
          textTransform: 'none',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
        swipeEnabled: true,
      }}
    >
      <Top.Screen
        name="Following"
        component={FollowingScreen}
        options={{ title: 'Following' }}
      />
      <Top.Screen
        name="ForYou"
        component={ForYouScreen}
        options={{ title: 'For You' }}
      />
    </Top.Navigator>
  );
}

function EmptyScreen() {
  return <View style={{ flex: 1, backgroundColor: '#000' }} />;
}

export default function MainNavigator() {
  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#aaa',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeTabs}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Discover"
        component={EmptyScreen}
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Create"
        component={EmptyScreen}
        options={{
          title: '',
          tabBarIcon: () => (
            <View
              style={{
                width: 44,
                height: 30,
                borderRadius: 8,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name="add" size={22} color="#000" />
            </View>
          ),
        }}
      />

      <Bottom.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: 'Inbox',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-outline" size={size} color={color} />
          ),
        }}
      />

      <Bottom.Screen
        name="Me"
        component={EmptyScreen}
        options={{
          title: 'Me',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}