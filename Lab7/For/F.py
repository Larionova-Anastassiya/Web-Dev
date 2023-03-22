res, k = 0, 1
for ch in input():
    res += int(ch) * k
    k *= 10
print(res)