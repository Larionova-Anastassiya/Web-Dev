n = int(input())
if ((n % 2 == 0) & (n < 5 & n > 2)):
    print("No Weird")
elif ((n % 2 == 0) & (n < 20 & n > 6)):
    print("Weird")
elif ((n % 2 == 0) & (n > 20)):
    print("Not Weird")
else: print("Weird")