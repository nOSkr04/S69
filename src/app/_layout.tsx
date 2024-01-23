import { SessionProvider } from "@/src/context/ctx";
import { Slot } from "expo-router";
import React from "react";
export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
