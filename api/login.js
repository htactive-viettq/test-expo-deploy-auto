import { get } from "./base";
import LinkApi from "../configs/linkApi";
import PushAlert from "../components/Alert";

async function login(username, password, remember) {
  const response = await get(
    `${LinkApi}/Login?password=${password}&phone_number=${username}&`
  );
  let result = {
    success: false,
  };
  const { flag } = response.data.STATUS || {};
  const { TaiKhoan } = response.data.INFORMATION || {};
  const { CuaHangList } = response.data.INFORMATION || {};
  if (flag === "login_account_not_exist") {
    PushAlert("Số điện thoại chưa được đăng ký!");
    return result;
  }

  if (flag === "login_password_wrong") {
    PushAlert("Mật khẩu không đúng!");
    return result;
  }
  if (flag === "login_password_correct") {
    if (TaiKhoan.isThungRac === "1") {
      PushAlert(
        "Tài khoản của bạn đã bị khóa, vui lòng liên hệ chủ cửa hàng để được mở khóa!"
      );
      return result;
    } else if (TaiKhoan.isDangNhapWeb === "0") {
      PushAlert(
        "Tài khoản của bạn không được cấp phép đăng nhập vào ứng dụng điện thoại. Vui lòng liên hệ chủ cửa hàng để được cấp phép!"
      );
      return result;
    }

    result.success = true;
    const { diaChi, quyen, id, hoTen, email, ngayTao, isTaiKhoanCap2 } = TaiKhoan;
    result.account = {
      address: diaChi,
      role: quyen,
      id,
      name: hoTen,
      email,
      created: new Date(ngayTao),
      isLevel1: isTaiKhoanCap2 === "0"
    };
    result.stores = CuaHangList.map(r => ({
      address: r.diaChi,
      id: r.id,
      isBanned: r.isKhoa !== "0",
      name: r.tenCuaHang,
      banReason: r.lyDoKhoa
    }));
    return result;
  }
  return result;
}

export { login };
