/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {  Tabs } from "expo-router";
import { useClientOnlyValue } from "@/src/hooks/useClientOnlyValue";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28}  {...props} />;
}

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title      : "Tab One",
          tabBarIcon : ({ color }) => <TabBarIcon color={color} name="code" />,
          headerShown: false
          // headerRight: () => (
          //   <Link asChild href="/article/12334">
          //     <Pressable>
          //       {({ pressed,  }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title      : "Tab Two",
          tabBarIcon : ({ color }) => <TabBarIcon color={color} name="code" />,
          headerShown: false
        }}
      />
    </Tabs>
  );
}
