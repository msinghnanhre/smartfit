import { Provider as PaperProvider, useTheme } from "react-native-paper";
import CustomTheme from "@/components/Theme";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { Stack, useNavigation } from "expo-router";
import { Image } from "expo-image";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={[style.headerContainer, { backgroundColor: colors.background }]}>
      <View style={style.header}>
        {/* Burger Menu */}
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={24} color={colors.primary} />
        </TouchableOpacity>

        {/* Title */}
        <Text style={style.headerTitle}>Ride Share</Text>

        {/* Profile Icon */}
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../assets/images/Fingerprint.png")} // Adjust the path for your profile image
            style={style.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default function RootLayout() {
  return (
    <PaperProvider theme={CustomTheme}>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </PaperProvider>
  );
}

function MainLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        header: () => <Header />,
        headerShown: true,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(root)" options={{ headerShown: true }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
    </Stack>
  );
}
