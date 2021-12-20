
    
def solution(phone_book):
  hash = {}
  for phone_number in phone_book:
    hash[phone_number] = 1
  for phone_number in phone_book:
    temp = ""
    for num in phone_number:
      temp += num
      if temp != phone_number and temp in hash:
        return False

  return True


  
sol = solution(["119", "97674223", "1195524421"])
print(sol) #false
sol2 = solution(["123","456","789"])
print(sol2)