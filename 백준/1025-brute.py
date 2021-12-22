import math
row, col = list(map(int, input().split(' ')))
answer = -1

block = [[0] * col for _ in range(row)]

for r in range(row):
  line = input()
  for c in range(len(line)):
    block[r][c] = line[c]

def pow_check(val):
  return (math.sqrt(val) % 1) == 0


for rowStep in range(-row, row):
  for colStep in range(-col, col):
    if rowStep == 0 and colStep == 0:
      continue
    for i in range(row):
      for j in range(col):
        temp = []
        x, y = i, j
        while x >= 0 and y >= 0 and x < row and y < col:
          temp.append(block[x][y])
          x += rowStep
          y += colStep
    
        for n in range(1, len(temp)+1):
          val = int(''.join(temp[:n]))
          if pow_check(val):
            if val > answer:
              answer = val

print(answer)