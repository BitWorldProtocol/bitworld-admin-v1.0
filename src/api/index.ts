import { Login, ResultData, User } from "@/types/api";
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
  },
  // 获取折线图数据
  getLineData() {
    return request.get<Dashboard.LineData>("/order/dashboard/getLineData");
  },
  // 获取城市分布图
  getPieCityData () {
    return request.get<Dashboard.PieData[]>("/order/dashboard/getPieCityData");
  },
  // 获取年龄分布图
  getPieAgeData() {
    return request.get<Dashboard.PieData[]>("/order/dashboard/getPieAgeData");
  },
  // 获取雷达图
  getRadarData() {
    return request.get<Dashboard.radarData>("/order/dashboard/getRadarData");
  },
  // 获取用户列表
  getUserList(params: User.Params) {
    return request.get<ResultData<User.UserItem>>("/users/list", params);
  }

}
