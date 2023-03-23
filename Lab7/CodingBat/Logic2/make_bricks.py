def make_bricks(small, big, goal):
  resto = goal
  resto -= 5*min(big,goal/5)
  return resto-small <= 0