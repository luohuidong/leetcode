var maximumGap = function(nums) {
  nums.sort((a, b) => a-b)
  let maxDiff = 0
  
  for(let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i+1] - nums[i]
    if (diff > maxDiff) {
      maxDiff = diff
    }
  }

  return maxDiff
}

export default maximumGap