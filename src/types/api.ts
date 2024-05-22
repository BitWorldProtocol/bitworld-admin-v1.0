
export interface Result<T = any> {
  code: number
  data: T
  msg: string
}

export interface ResultData<T = any> {
  list: T[]
  page: {
    pageNum: number
    pageSize: number
    total: number | 0
  }
}

export interface PageParams {
  pageNum: number
  pageSize: number
}

export namespace Login {
  export interface params {
    userName: string,
    userPwd: string
  }
}

export namespace User {
  // 继承分页功能
  export interface Params extends PageParams {
    userId?: number
    userName?: string
    state?: number
  }
  export interface UserItem {
    _id: string
    userId: number
    userName: string
    userEmail: string
    deptId: string
    state: number
    mobile: string
    job: string
    role: number
    roleList: string
    createId: number
    deptName: string
    userImg: string
  }
}

export namespace Dashboard {
  export interface ReportData {
    driverCount: number
    totalMoney: number
    orderCount: number
    cityNum: number
  }

  export interface LineData {
    label: string[]
    order: number[]
    money: number[]
  }

  export interface PieData {
    value: number
    name: string
  }

  export interface radarData {
    indicator: Array<{ name: string; max: number }>
    data: {
      name: string,
      value: number[]
    }
  }
}
