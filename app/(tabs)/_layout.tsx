import { Tabs } from "expo-router";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerShown: false,

        tabBarStyle: {
          left: 0,
          bottom: 0,
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="home"
              size={30}
              color={focused ? color : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="explore"
              size={30}
              color={focused ? color : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="timer"
              size={30}
              color={focused ? color : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Bookmarks",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="bookmark"
              size={30}
              color={focused ? color : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name="account-circle"
              size={30}
              color={focused ? color : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
