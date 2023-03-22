x = int(input())
ans = 0

for i in range(1, x + 1):
    if x % i == 0:
        ans += 1

print(ans)