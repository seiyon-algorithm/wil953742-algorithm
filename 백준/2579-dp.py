import math

n = int(input())
stairs = []
for _ in range(n):
  stairs.append(int(input()))

dp = [0] * n

def dp_fn(dp, idx):
  if idx == 0:
    dp[0] = stairs[0]
  elif idx == 1:
    dp[1] = stairs[1] + stairs[0]
  elif idx == 2:
    dp[2] =  max((stairs[2] + stairs[1]), (stairs[2] + stairs[0]))
  else:
    dp[idx] = max((stairs[idx] + dp[idx-2]), (stairs[idx] + stairs[idx-1] + dp[idx-3]))
    
for i in range(n):
  dp_fn(dp, i)

print(dp[n-1])
  