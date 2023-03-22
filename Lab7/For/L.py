a = [[int(i) for i in input()], []]
for i in range(len(a[0]) - 1, -1, -1):
    a[1].append(2 ** i)
for i in range(len(a) + 1):
    if a[0][i] == 0:
        a[1][i] = 0
    else:
        a[1][i] = a[1][i] * 1
print(sum(a[1]))