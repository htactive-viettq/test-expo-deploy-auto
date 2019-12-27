import api from "../api";
import { Alert, AsyncStorage } from "react-native";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions";
import axios from "axios";

const root = "/Login";

function* checkAuth() {
  yield takeEvery(LOGIN_REQUEST, function*(action) {
    try {
      const payload = action.infoLogin || {};
      if (payload.password && payload.account) {
        const response = yield call(
          axios.get,
          `${api}${root}?password=${payload.password}&phone_number=${payload.account}&`
        );
        const flag = response.data.STATUS.flag || {};
        const infomation = response.data.INFORMATION.TaiKhoan || {};

        switch (flag) {
          case "login_account_not_exist":
            Alert.alert(
              "Thông báo!",
              "Số điện thoại chưa được đăng ký",
              [{ text: "OK" }],
              { cancelable: false }
            );
            break;
          case "login_password_wrong":
            Alert.alert(
              "Thông báo!",
              "Số điện thoại hoặc mật khẩu không đúng",
              [{ text: "OK" }],
              { cancelable: false }
            );
            break;
          case "login_password_correct":
            if (infomation.isThungRac === "1") {
              Alert.alert(
                "Thông báo!",
                "Tài khoản của bạn đã bị khóa, vui lòng liên hệ chủ cửa hàng để được mở khóa",
                [{ text: "OK" }],
                { cancelable: false }
              );
            } else if (infomation.isDangNhapWeb === "0") {
              Alert.alert(
                "Thông báo!",
                "Tài khoản của bạn không được cấp phép đăng nhập vào ứng dụng điện thoại. Vui lòng liên hệ chủ cửa hàng để được cấp phép",
                [{ text: "OK" }],
                { cancelable: false }
              );
            } else if (
              infomation.isDangNhapWeb === "1" &&
              infomation.isThungRac === "0"
            ) {
              if (payload.remember) {
                AsyncStorage.setItem("infoAccount", JSON.stringify(infomation));
                AsyncStorage.setItem(
                  "listStore",
                  JSON.stringify(response.data.INFORMATION.CuaHangList)
                );
              }
              if (infomation.isTaiKhoanCap2 == "0") {
                yield put({
                  type: LOGIN_SUCCESS,
                  payload: "store",
                  navigation: action.navigation
                });
              }
              if (infomation.isTaiKhoanCap2 == "1") {
                yield put({
                  type: LOGIN_SUCCESS,
                  payload: "customer",
                  navigation: action.navigation
                });
              }
            }
            break;
          default:
            break;
        }
      } else {
        Alert.alert(
          "Thông báo!",
          "Vui lòng nhập đầy đủ thông tin đăng nhập",
          [{ text: "OK" }],
          { cancelable: false }
        );
      }
    } catch (error) {}
  });
}

export default function*() {
  yield all([checkAuth()]);
}
