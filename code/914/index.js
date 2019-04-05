/**
 * 获取两个数的最大公约数
 * @param {number} a 数字 a
 * @param {number} b 数字 b
 */
function getHighestCommonFactor(a, b) {
  let large
  let small

  if (a > b) {
    large = a
    small = b
  } else {
    large = b
    small = a
  }
  // 取余
  const remainder = large % small

  // 如果余数为 0，b 的最大公约数
  if (remainder === 0) {
    return small
  }

  return getHighestCommonFactor(small, remainder)
}

const a = (deck) => {
  // 对卡牌进行排序, 并转换为字符串
  // [1, 3, 4, 1, 4, 3] => 113344
  const str = deck.sort((a, b) => a-b).join('')

  // 对卡牌进行分组
  const regex = /(\d)\1+/g
  let group = str.match(regex)

  while(group.length > 1) {
    const a = group.shift().length
    const b = group.shift().length
    
    // a, b 获取最大公约数
    const highestCommonFactor = getHighestCommonFactor(a, b)
  
    if (highestCommonFactor === 1) {
      return false
    } else {
      group.unshift(getHighestCommonFactor )
    }
  }

}

a([1, 3, 4, 1, 4, 3])

// export default a