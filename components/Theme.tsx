import { Button, DefaultTheme } from "react-native-paper";

// Define the color palette based on the provided image
const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#281C9D", // Main Primary color
    accent: "#5655B9", // Secondary Primary color
    background: "#FFFFFF", // Default background color (White)
    surface: "#F2F1F9", // Lightest shade for surfaces
    text: "#343434", // Main text color (Neutral Dark)
    placeholder: "#898989", // Placeholder text color (Neutral Light)
    onSurface: "#A8A3D7", // Text on card surfaces
    error: "#FF4267", // Semantic error color
    success: "#52D5BA", // Semantic success color
    warning: "#FFAF2A", // Semantic warning color
    info: "#0889FE", // Semantic information color
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Poppins-Thin",
      fontWeight: "100",
    },
  },
  roundness: 4, // You can adjust the roundness of components like buttons
  shadows: {
    card: {
      shadowColor: "#3629B7",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.07,
      shadowRadius: 30,
    },
    smallCard: {
      shadowColor: "#3629B7",
      shadowOffset: { width: 0, height: -5 },
      shadowOpacity: 0.07,
      shadowRadius: 30,
    },
  },
};

export default CustomTheme;
