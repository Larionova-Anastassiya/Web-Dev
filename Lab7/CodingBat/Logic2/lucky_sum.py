def lucky_sum(a, b, c):
  sum = 0
  list = [a,b,c,13]
  for n in list[:list.index(13)]:
    sum += n
  return sum