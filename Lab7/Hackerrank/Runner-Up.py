n = int(input())
arr = map(int, input().split())
a = list(arr)

lists = []
maximum = max(a)

count = 0
for i in a:
    if maximum == i:
        pass
    else:
        lists.append(i)

print(max(lists))