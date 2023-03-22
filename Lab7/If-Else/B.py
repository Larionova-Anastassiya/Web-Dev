year = int(input())

if (year % 4 != 0):
    print("NO")
elif year % 100 == 0:
    if year % 400 == 0:
        print('YES')
    else:
        print('NO')
else:
    print('YES')