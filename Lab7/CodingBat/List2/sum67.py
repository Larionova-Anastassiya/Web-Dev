def sum67(nums):
    count = 0
    blocked = False
    for n in nums:
        if n == 6:
            blocked = True
            continue
        if n == 7 and blocked:
            blocked = False
            continue
        if not blocked:
            count += n
    return count