import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button, useTheme } from "react-native-paper";

export default function AboutScreen() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href="/profile" asChild>
        <Button mode="contained" style={{ backgroundColor: colors.primary }}>
          Profile
        </Button>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
