let comb = (arr) => {
  // 临时变量用来保存前两个组合的结果
  let tmp = []
  
  const firstElement = arr[0]
  const secondElement = arr[1]
  
  // 最外层的循环是遍历第一个元素，第二层是遍历第二个元素
  for(let i=0; i < firstElement.length; i++) {
    for(let j=0; j < secondElement.length; j++) {
      tmp.push(`${firstElement[i]}${secondElement[j]}`)
    }
  }
  
  arr.splice(0, 2, tmp)
  if (arr.length > 1) {
    comb(arr)
  } else {
    return tmp
  }

  return arr[0]
}

export default (digits) => {
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  
  // 将输入的字符串按单字符分割成数组, 23=>[2, 3]
  let numArr = [...digits]

  // 保存键盘映射后的字母内容，如 23 => ['abc', 'def']
  let code = []
  numArr.forEach(item => {
    if(map[item]) {
      code.push(map[item])
    }
  })

  const result = comb(code)
  return result
}