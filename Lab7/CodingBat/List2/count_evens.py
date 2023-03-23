def count_evens(nums):
  count = 0
  for n in nums:
    count -= n%2-1
  return count