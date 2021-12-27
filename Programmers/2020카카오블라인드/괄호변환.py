from collections import deque

def balance(p):
  cnt = {'(':0, ')':0}
  for i in range(len(p)):
    if cnt['('] > 0 and cnt['('] == cnt[')']:
      return [p[:i], p[i:]]
    cnt[p[i]] += 1
  return [p, '']
  
def right(u):
  stack = deque(u[0])
  for i in range(1, len(u)):
    if u[i] == ')':
      head = stack.pop()
      if head == ')':
        stack.append(head)
        stack.append(u[i])
    else:
      stack.append(u[i])
  if len(stack) > 0:
    return False
  else:
    return True
    
def solution(p):
  if len(p) == 0:
    return ''
  
  u, v = balance(p)
  if right(u):
    return u + solution(v)
  else:
    str = '('
    str += solution(v)
    str += ')'
    u = u[1:-1]
    for char in u:
      if char == '(':
        str += ')'
      else:
        str += '('
    return str
  
sol1 = solution("(()())()")
sol2 = solution("((((()))))))))))))))))")
sol3 = solution("()))((()")
print(sol1) #"(()())()"
print(sol2) #"()"
print(sol3) #"()(())()"
