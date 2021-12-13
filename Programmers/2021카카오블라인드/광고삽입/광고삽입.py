from collections import defaultdict
from datetime import datetime

def time_to_sec(time):
  time_list = time.split(':')
  return int(time_list[0]) * 60 * 60 + int(time_list[1]) * 60 + int(time_list[2])

def parse_log(log):
  start, last = log.split('-')
  return [time_to_sec(start), time_to_sec(last)]

def format(num):
  if num > 9:
    return str(num)
  else: 
    return '0' + str(num)

def sec_to_time(sec):
  hour = sec // 3600
  minute = (sec % 3600) // 60
  second = (sec % 3600) % 60

  return format(hour) + ':' + format(minute) + ':' + format(second)

def solution(play_time, adv_time, logs):
    stack_play_time = defaultdict(list)
    
    play_sec = time_to_sec(play_time)
    adv_sec = time_to_sec(adv_time)
    new_logs = list(map(parse_log, logs))
    new_logs.sort(key=lambda x: x[0])
    
    for i in range(len(new_logs)):
      stack_time = 0
      start_sec, end_sec = new_logs[i][0], new_logs[i][0] + adv_sec
      
      for tar_start_sec, tar_end_sec in new_logs:
        if tar_end_sec <= start_sec:
          continue;
        
        if end_sec <= tar_start_sec:
          break;

        if end_sec > tar_end_sec:
          if tar_start_sec < start_sec:
            stack_time += tar_end_sec - start_sec
          else:
            stack_time += tar_end_sec - tar_start_sec
        
        else:
          if tar_start_sec < start_sec:
            stack_time += end_sec - start_sec
          else:
            stack_time += end_sec - tar_start_sec
            
      stack_play_time[stack_time].append(new_logs[i][0])
    
    max_play_time = max(stack_play_time.keys())
    max_play_list = sorted(stack_play_time[max_play_time])
    return sec_to_time(max_play_list[0])
  

sol = solution("02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"])
print(sol) # 01:30:59