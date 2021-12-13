def solution(n, s, a, b, fares):
    answer = 0
    INF = 1e9
    graph = [[INF] * (n+1) for _ in range(n+1)]
    for fare in fares:
      graph[fare[0]][fare[1]] = fare[2]
      graph[fare[1]][fare[0]] = fare[2]  

    for i in range(1, n+1):
      graph[i][i] = 0
    
    for round in range(1, n+1):
      for i in range(1, n+1):
        for j in range(1, n+1):
          if graph[i][round] + graph[round][j] < graph[i][j]:
            graph[i][j] = graph[i][round] + graph[round][j]
    
    answer = graph[s][a] + graph[s][b]
    for round in range(1, n+1):
      new_fare = graph[s][round] + graph[round][a] + graph[round][b]
      if new_fare < answer:
        answer = new_fare
    
    return answer
  
  
  
sol = solution(6, 4, 6, 2, [[4, 1, 10], [3, 5, 24], [5, 6, 2], [3, 1, 41], [5, 1, 24], [4, 6, 50], [2, 4, 66], [2, 3, 22], [1, 6, 25]])
print(sol) #82