def power(arr):
      a = arr[0]
      b = arr[1]
      ans = a ** b
      print(ans)


a = list(map(int, input().split()))
power(a)