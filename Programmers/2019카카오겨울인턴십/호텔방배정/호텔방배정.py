rooms = {}

def solution(k, room_number):
    reserved = [False] * (k+1)
    
    def assign_rooms(number):
        if not reserved[number]:
            reserved[number] = True
            rooms[number] = number+1
            return number

        near_number = assign_rooms(rooms[number])
        rooms[near_number] = near_number+1
        return near_number
             
    return list(map(assign_rooms, room_number))
        

sol = solution(10, [1,3,4,1,3,1])
print(sol)