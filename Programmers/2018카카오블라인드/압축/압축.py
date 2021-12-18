dictionary = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

def solution(msg):
  answer = []
  i = 0
  while i < len(msg):
    num = 0
    jump = 1
    print(dictionary)
    for j in range(len(dictionary)):
      word_len = len(dictionary[j])
      if msg[i:i+word_len] == dictionary[j]:
        num = j
        jump = word_len
    if i+jump < len(msg):
      dictionary.append(msg[i:i+jump+1])
    answer.append(num)
    i += jump
    
  return answer
  
sol = solution("TOBEORNOTTOBEORTOBEORNOT")
print(sol)