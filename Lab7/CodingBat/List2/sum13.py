def sum13(nums):
    while 13 in nums:
        if nums.index(13) < len(nums) - 1:
            nums.pop(nums.index(13) + 1)
        nums.pop(nums.index(13))
    return sum(nums)