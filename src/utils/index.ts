/**
 * 工具函数封装
 */

/**
 * 格式化金额
*/
export const formatMoney = (num?: number | string) => {
  if(!num) return '0.00'
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

//格式化数字 正则表达式实现
export const formateNum = (num?: number | string) => {
  if(!num) return 0
  const a = num.toString()
  if(a.indexOf(".") > -1) return a.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  return a.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

/**
 * 格式化日期
 */
export const toLocalDate = (date?:Date, rule?: string) => {
  let curDate = new Date()
  if(date) curDate = date
  if(rule === 'yyyy-MM-dd') {
    return curDate.toLocaleDateString().replace('/', '-')
  }
  if(rule === 'HH:mm:ss') {
    return curDate.toLocaleTimeString().replace('/', '-')
  }
  return curDate.toLocaleString().replace('/', '-')
}

// 用户状态转换
export const formateState = (state: number) => {
  if (state === 1) return '在职'
  if (state === 2) return '试用期'
  if (state === 3) return '离职'
}

