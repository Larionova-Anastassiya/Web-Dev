def minimum(arr):
    arr.sort()
    return arr[0]

a = list(map(int, input().split()))
print((minimum(a)))