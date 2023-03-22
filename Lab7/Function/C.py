def boolean(arr):
    a = arr[0]
    b = arr[1]
    if (bool(a) != bool(b)):
        print(1)
    else: print(0)


a = list(map(int, input().split()))
boolean(a)