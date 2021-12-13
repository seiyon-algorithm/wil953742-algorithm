def solution(stones, k):
  answer = 0
  left = 1
  right = max(stones)
  
  while right >= left:
    mid = (left + right) // 2
    count = 0
    
    for stone in stones:
      if stone - mid < 0:
        count += 1
      else:
        count = 0
      
      if count >= k:
        break
    
    if count >= k:
      right = mid - 1
    else:
      answer = left
      left = mid + 1
  
  return left

sol = solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1]	, 3)
print(sol)