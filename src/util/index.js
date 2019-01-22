//判断是否是闰年
export function isLeapYear(year) {
  return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))
}

// 判断是否是空对象
export function isEmpty (obj) {
  for (var i in obj) {
    return false
  }
  return true
}
