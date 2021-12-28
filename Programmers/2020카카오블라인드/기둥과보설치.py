def solution(n, build_frame):
  answer = [[]]
  answer_dict = {}
  block = [[2] * (n+1) for _ in range(n+1)]
  
  for build in build_frame:
    x, y, a, b = build
    if b == 1:
      if a == 0:
        if y == 0 or block[x][y] < 2:
          block[x][y] = 0
          block[x][y+1] = 0
          answer_dict[[x, y]] = 0
      else:
        if block[x][y] == 1 or (block[x][y] == 0 and block[x+1][y] == 0):
          block[x][y] = 1
          block[x+1][y] = 1
          answer_dict[[x, y]] = 1
      
    else:
      if a == 0:
        
      
      else:
        if x == 0
        if block[x-1]


  return answer
  
sol1 = solution(5, [[1,0,0,1],[1,1,1,1],[2,1,0,1],[2,2,1,1],[5,0,0,1],[5,1,0,1],[4,2,1,1],[3,2,1,1]])
sol2 = solution(5, [[0,0,0,1],[2,0,0,1],[4,0,0,1],[0,1,1,1],[1,1,1,1],[2,1,1,1],[3,1,1,1],[2,0,0,0],[1,1,1,0],[2,2,0,1]])
print(sol1)
print(sol2)