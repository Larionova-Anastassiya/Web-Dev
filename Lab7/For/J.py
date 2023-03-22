#ans = sum(i for i in range(0, 100 + 1))
#print(ans)

ans = 0

numbers = raw_input()
nums = numbers.split(" ")
nums2 = [int(x) for x in nums if int(x) >= 0]
for x in nums2:
    ans += x
print(ans)