import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import FavoritesScreen from '../screen/FavouritesScreen';
import CartScreen from '../screen/CartScreen';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import CustomeIcon from '../components/CustomeIcon';

import React from 'react'
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarHideOnKeyboard: true,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBarStyle,
      tabBarBackground: () => (
        <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
      ),
    }}>
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomeIcon name='home' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
      <Tab.Screen name='Cart' component={CartScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomeIcon name='cart' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
      <Tab.Screen name='Favourite' component={FavoritesScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomeIcon name='like' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
      <Tab.Screen name='History' component={OrderHistoryScreen} options={{
        tabBarIcon: ({ focused, color, size }) => (
          <CustomeIcon name='bell' size={25} color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex} />
        )
      }}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});