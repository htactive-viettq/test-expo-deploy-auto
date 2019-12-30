import { Alert, Keyboard, Platform } from "react-native";

const PushAlert = props => {
  {
    Platform.OS === "android" && Keyboard.dismiss();
  }
  return Alert.alert("Thông báo!", props, [{ text: "OK" }], {
    cancelable: false
  });
};

export default PushAlert;
