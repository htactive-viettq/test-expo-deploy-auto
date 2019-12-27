import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
  View
} from "react-native";
import {
  Block,
  Button,
  Text,
  theme,
  Input,
  Icon,
  Checkbox
} from "galio-framework";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAvoidingView } from "react-native";

const { height, width } = Dimensions.get("screen");
import { Images, materialTheme } from "../constants/";
import { HeaderHeight } from "../constants/utils";

const LoginScreen = ({ navigation }) => {
  const iconUsername = (
    <Icon
      size={16}
      color={theme.COLORS.MUTED}
      name="account-circle"
      family="material"
    />
  );
  const iconPassword = (
    <Icon
      size={16}
      color={theme.COLORS.MUTED}
      name="vpn-key"
      family="material"
    />
  );
  return (
    <Block flex style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Block flex>
        <ImageBackground
          source={Images.Login}
          style={{ height: height / 1.8, width, zIndex: 1 }}
        >
          <LinearGradient
            style={styles.gradient}
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          />
        </ImageBackground>

        <KeyboardAvoidingView style={styles.padded} behavior="padding" enabled>
          <Image
            style={{ height: 200, width: "100%" }}
            source={Images.Logo}
            resizeMode="contain"
          ></Image>
          <Block space="between">
            <Block>
              <Block>
                <Block>
                  <Text color="white" size={60}>
                    Đăng nhập
                  </Text>
                </Block>
                <Block row>
                  <Text color="white" size={60}>
                    Viet Bill
                  </Text>
                  <Block middle style={styles.pro}>
                    <Text size={16} color="white">
                      Mobile
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Text size={16} color="rgba(255,255,255,0.6)">
                Phần mềm tính tiền Karaoke, Cafe, Bida, Quán ăn, Nhà Hàng, Shop
                thời trang, tạp hóa. Cung cấp phần mềm quản lý chuyên nghiệp,
                miễn phí.
              </Text>
              <Block
                style={{
                  marginTop: theme.SIZES.BASE * 1.5,
                  marginBottom: theme.SIZES.BASE * 1.5
                }}
              >
                <Input
                  left
                  color="black"
                  iconContent={iconUsername}
                  placeholder="Số điện thoại"
                />
                <Input
                  password
                  viewPass
                  left
                  iconContent={iconPassword}
                  color="black"
                  placeholder="Mật khẩu"
                />
              </Block>
              <Block style={{ marginBottom: theme.SIZES.BASE * 1.5 }}>
                <Checkbox
                  color="warning"
                  labelStyle={{ color: "#fff" }}
                  label="Ghi nhớ mật khẩu"
                />
              </Block>
              <Button
                shadowless
                style={styles.button}
                color={materialTheme.COLORS.BUTTON_COLOR}
                onPress={() => navigation.navigate("Home")}
              >
                ĐĂNG NHẬP
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </Block>
    </Block>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: "absolute",
    bottom:
      Platform.OS === "android" ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 8,
    marginLeft: 12,
    borderRadius: 2,
    height: 22
  },
  gradient: {
    zIndex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});
