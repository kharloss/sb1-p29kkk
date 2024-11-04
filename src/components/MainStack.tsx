import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { AuthScreen } from "./screens/AuthScreen";
import { RulesScreen } from "./screens/RulesScreen";
import { EntryFormScreen } from "./screens/EntryFormScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { TabNavigator } from "./navigation/TabNavigator";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <BaseNavigationContainer>
      <StackNavigator.Navigator
        initialRouteName={isAuthenticated ? "Main" : "Auth"}
        screenOptions={{
          headerShown: true,
        }}
      >
        {!isAuthenticated ? (
          <StackNavigator.Screen 
            name="Auth" 
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <StackNavigator.Screen
              name="Main"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <StackNavigator.Screen name="Rules" component={RulesScreen} />
            <StackNavigator.Screen name="Entry" component={EntryFormScreen} />
          </>
        )}
      </StackNavigator.Navigator>
    </BaseNavigationContainer>
  );
}