def in1to10(n, outside_mode):
  if n == 1 or n == 10:
    return True
  return (n in range(1,11)) ^ outside_mode