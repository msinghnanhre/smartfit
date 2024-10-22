import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

const PagesLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default PagesLayout;
