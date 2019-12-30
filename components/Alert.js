import { Alert } from "react-native";

const PushAlert = props => {
  return Alert.alert("Thông báo!", props, [{ text: "OK" }], {
    cancelable: false
  });
};

export default PushAlert;
