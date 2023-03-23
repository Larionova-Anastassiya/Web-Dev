def make_chocolate(small, big, goal):
    big *= 5
    if big + small < goal or small < goal%5:
        return -1
    small = goal - big
    return small%5 if small < 0 else small