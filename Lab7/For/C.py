a = int(input())
b = int(input())

for i in range(a,b):
   i**=0.5
   s=i//1
   if i==s:
       print(int(i**2), end=" ")
