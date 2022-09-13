import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  button: {
    width: width - 64,
    height: 49,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontFamily: "Open-Sans-Bold",
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.75,
  },
});

export default styles;
