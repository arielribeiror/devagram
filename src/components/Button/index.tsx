import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { IButton } from "./types";
import styles from "./styles";

const Button = (props: IButton) => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        disabled={props.disabled}
        style={
          props.disabled
            ? [styles.button, props.style, styles.buttonDisabled]
            : [styles.button, props.style]
        }
      >
        {props.loading ? (
          <ActivityIndicator size={30} color={"#ffffff"} />
        ) : (
          <Text style={styles.text}>{props.placeholder}</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Button;
