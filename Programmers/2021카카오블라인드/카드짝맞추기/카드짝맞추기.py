Board = []
Allcard = []
Allremoved = 1

def permutate(cnt, removed, src):
  

def solution(board, r, c):
  global Board, Allcard, Allremoved
  Board = board
  for i in range(4):
    for j in range(4):
      num = Board[i][j]
      if num:
        Allremoved |= 1 << num
        if num in Allcard:
          Allcard[num].append((i, j, 0))
        else:
          Allcard[num] = [(i, j, 0)]
  
  