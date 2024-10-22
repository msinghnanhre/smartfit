import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Controller, useForm } from "react-hook-form";
import {
  TextInput,
  Button,
  useTheme,
  RadioButton,
  Text,
} from "react-native-paper";
import { useState } from "react";
import { useRouter } from "expo-router";

const Lock = require("@/assets/images/login.png");
export default function SignupScreen() {
  const { colors } = useTheme(); // Get colors, fonts, and spacing from theme
  const navigation = useRouter();
  const [terms, setTerms] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here (e.g., call login API)
  };
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.primary }]}>
          Welcome to SmartFit
        </Text>
        <Text style={[styles.subtitle, { color: colors.text }]}>
          Hello there, create your account to get started!
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
            secureTextEntry={showPassword}
            style={styles.input}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            error={!!errors.password}
          />
        )}
        name="password"
      />
      {/* confirm passworkd */}
      <Controller
        control={control}
        rules={{ required: "Confirm password is required" }}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Confirm Password"
            mode="outlined"
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            secureTextEntry={showPassword}
            style={styles.input}
            right={
              <TextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            error={!!errors.password}
          />
        )}
      />
      {errors.password && (
        <Text style={[styles.errorText, { color: colors.error }]}>
          {errors.password.message}
        </Text>
      )}

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginBottom: 16,
        }}
      >
        <RadioButton
          value="first"
          status={terms ? "checked" : "unchecked"}
          onPress={() => setTerms(!terms)}
        />
        <Text variant="bodyLarge">
          {" "}
          By signing up, you agree to our{" "}
          <Text style={{ color: colors.primary }}>
            Terms of service and privacy policy
          </Text>
        </Text>
      </View>

      <Button
        mode="contained"
        style={[styles.signInButton, { backgroundColor: colors.primary }]}
        onPress={handleSubmit(onSubmit)}
      >
        Sign Up
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate("/login")}>
        <Text style={[styles.signupText, { color: colors.text }]}>
          Have an account?{" "}
          <Text style={{ color: colors.primary }}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
