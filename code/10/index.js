const isMatch = (s, p) => {
  // 边界处理：p 为空的情况
  if (!p) {
    return s ? false : true
  }

  // 判断p模式字符串的第一个字符和s字符串的第一个字符是不是匹配
  let match = false
  if (s && (p[0] === s[0] || p[0] === '.')) {
    match = true
  }

  // p有 * 模式的
  if (p.length > 1 && p[1] === '*') {
    // 第一种情况：
    // s*匹配0个字符，这清空主要应对 s 为 sa，而 p 为 s*sa 的情况，这也是满足匹配的，
    // 这种情况不行之后，再尝试第二种情况
    // 第二种情况：s*匹配先1个字符，递归下去，用来表示s*匹配多个s
    return isMatch(s, p.slice(2)) || (match && isMatch(s.slice(1), p))
  } else {
    // p 没有 * 模式的情况：
    // 先确保 p 与 s 的第一个字符是匹配上的，然后再将 p 与 s 的第一个字符去掉，在匹配其它的字符
    // 如果没匹配上，则直接返回 false。
    return match && isMatch(s.slice(1), p.slice(1))
  }
}


export default isMatch