s = int(input())
arr = list(map(int,(input()).split()))
n = len(arr)
ans = 0
for i in range(1, n-1):
    if (arr[i] > arr[i-1]) & (arr[i] > arr[i+1]):
        ans += 1
print(ans)