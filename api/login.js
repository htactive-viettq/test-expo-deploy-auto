import { get } from "./base";
import LinkApi from "../configs/linkApi";
import PushAlert from "../components/Alert";
import { saveListStore } from "../storages/list-store";
import { saveUser } from "../storages/user-token";

async function login(username, password) {
  const response = await get(
    `${LinkApi}/Login?password=${password}&phone_number=${username}&`
  );
  let result = {};
  const { flag } = response.data.STATUS || {};
  const { TaiKhoan } = response.data.INFORMATION || {};
  const { CuaHangList } = response.data.INFORMATION || {};

  switch (flag) {
    case "login_account_not_exist":
      PushAlert("Số điện thoại chưa được đăng ký!");
      break;
    case "login_password_wrong":
      PushAlert("Mật khẩu không đúng!");
      break;
    case "login_password_correct":
      if (TaiKhoan.isThungRac === "1") {
        PushAlert(
          "Tài khoản của bạn đã bị khóa, vui lòng liên hệ chủ cửa hàng để được mở khóa!"
        );
      } else if (TaiKhoan.isDangNhapWeb === "0") {
        PushAlert(
          "Tài khoản của bạn không được cấp phép đăng nhập vào ứng dụng điện thoại. Vui lòng liên hệ chủ cửa hàng để được cấp phép!"
        );
      } else if (
        TaiKhoan.isDangNhapWeb === "1" &&
        TaiKhoan.isThungRac === "0"
      ) {
        saveListStore(JSON.stringify(CuaHangList));
        if (payload.remember) {
          saveUser(JSON.stringify(TaiKhoan));
        }
        if (TaiKhoan.isTaiKhoanCap2 == "0") {
          yield put(NavigationActions.navigate({ routeName: "Home" }));
        }
        if (TaiKhoan.isTaiKhoanCap2 == "1") {
          yield put(NavigationActions.navigate({ routeName: "Home" }));
        }
      }
      break;
    default:
      break;
  }
  return result;
}

export { login };
