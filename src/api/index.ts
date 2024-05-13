import { Login, User } from "@/types/api";
import request from "@/utils/request";
import { Dashboard } from "@/types/api";

export default {
  // 登陆
  login(params: Login.params) {
    return request.post<string>("/users/login", params, { showLoading: false});
  },
  // 获取用户信息
  getUserInfo() {
    return request.get<User.UserItem>("/users/getUserInfo");
  },
  // 获取工作台汇总数据
  getReportData() {
    return request.get<Dashboard.ReportData>("/order/dashboard/getReportData");
  }
}
