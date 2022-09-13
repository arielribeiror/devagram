import { Image } from "react-native";
import styles from "./styles";
import { IAvatar } from "./types";

const Avatar = (props: IAvatar) => {
  return (
    <>
      {props.image ? (
        <Image style={styles.containerAvatar} source={{ uri: props.image }} />
      ) : (
        <Image
          style={styles.containerAvatar}
          source={require("../../assets/img/avatar.png")}
        />
      )}
    </>
  );
};

export default Avatar;
