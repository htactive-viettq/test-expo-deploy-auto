import React, { useEffect } from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { getUser } from "../storages/user-token";

const AuthLoading = ({ navigation }) => {
  useEffect(() => {
    _bootstrapAsync();
  }, []);

  const _bootstrapAsync = async () => {
    const userToken = await getUser();
    navigation.navigate(userToken ? "Home" : "LoginScreen");
  };

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default AuthLoading;
