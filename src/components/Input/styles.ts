import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  containerInput: {
    width: width - 64,
    height: 49,
    marginVertical: 6,
    borderWidth: 2,
    borderColor: colors.light,
    borderRadius: 6,
    justifyContent: "center",
  },
  input: {
    width: width - 64,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Open-Sans-Regular",
    color: colors.grayColor02,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputDisabled: {
    opacity: 0.75,
  },
});

export default styles;
