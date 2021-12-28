from itertools import combinations

n, m = list(map(int, input().split(' ')))
address = {1: [], 2: []}

for i in range(n):
  line = list(map(int, input().split(' ')))
  for j in range(n):
    if line[j] != 0:
      address[line[j]].append([i, j])

answer = 1e9
for chicken in list(combinations(address[2], m)):
  distance = 0
  for home in address[1]:
    curr = 101
    for chic in chicken:
      temp = abs(home[0]-chic[0])+abs(home[1]-chic[1])
      if temp < curr:
        curr = temp
    distance += curr
  if distance < answer:
    answer = distance

print(answer)