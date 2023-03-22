repeats = int(input())
count = 0

for i in range(repeats):
    num = int(input())
    count += (lambda x: 1 if x == 0 else 0)(num)  # if num == 0: count += 1

print(count)