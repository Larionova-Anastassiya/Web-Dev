n = int(input())
a = list(map(int, input().split()))
result = sum(x > y for x, y in zip(a[1:], a))
print(result)