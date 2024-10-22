import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { logIn } from "@/store/authSlice";

const Fingerprint = require("@/assets/images/Fingerprint.png");
const Lock = require("@/assets/images/login.png");

const LoginScreen = () => {
  const { colors } = useTheme(); // Get colors, fonts, and spacing from theme
  const navigation = useRouter();

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Check for biometric support
  React.useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  }, []);

  const onSubmit = (data) => {
    console.log(data);

    const user = {
      email: data?.email,
      password: data?.password,
      id: data?.email,
    };
    dispatch(logIn(user));
    navigation.replace("/");
    // Handle form submission logic here (e.g., call login API)
  };

  const handleBiometricAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync();
    if (result.success) {
      console.log("Authenticated");
    } else {
      console.log("Authentication failed");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.primary }]}>
          Welcome Back
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Hello there, sign in to continue
        </Text>
      </View>

      <Image source={Lock} style={styles.lockImage} />

      {/* Email Input */}
      <Controller
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email format",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            style={styles.input}
            error={!!errors.email}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={[styles.errorText, { color: colors.error }]}>
          {errors.email.message}
        </Text>
      )}

      {/* Password Input */}
      <Controller
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Password"
            mode="outlined"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            secureTextEntry
            style={styles.input}
            right={<TextInput.Icon name="eye" />}
            error={!!errors.password}
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={[styles.errorText, { color: colors.error }]}>
          {errors.password.message}
        </Text>
      )}

      <TouchableOpacity>
        <Text style={[styles.forgotPassword, { color: colors.accent }]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>

      <Button
        mode="contained"
        style={[styles.signInButton, { backgroundColor: colors.primary }]}
        onPress={handleSubmit(onSubmit)}
      >
        Sign in
      </Button>

      {isBiometricSupported && (
        <TouchableOpacity
          onPress={handleBiometricAuth}
          style={styles.fingerprintContainer}
        >
          <Image source={Fingerprint} style={styles.fingerprintImage} />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate("signup")}>
        <Text style={[styles.signupText, { color: colors.text }]}>
          Don't have an account?{" "}
          <Text style={{ color: colors.primary }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  lockImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginVertical: 20,
  },
  input: {
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  signInButton: {
    paddingVertical: 8,
    marginBottom: 20,
  },
  fingerprintContainer: {
    alignSelf: "center",
    marginTop: 20,
  },
  fingerprintImage: {
    width: 64,
    height: 64,
  },
  signupText: {
    alignSelf: "center",
    marginTop: 20,
  },
  errorText: {
    marginBottom: 10,
  },
});

export default LoginScreen;
