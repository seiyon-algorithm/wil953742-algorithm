import heapq

freq = [[43, 'a'], [13, 'b'], [12, 'c'], [16, 'd'], [9, 'e'], [7, 'f']]

def huffman(freq):
  heap = freq[:]
  heapq.heapify(heap)
  while len(heap) > 1:
    node1 = heapq.heappop(heap)
    node2 = heapq.heappop(heap)
    heapq.heappush(heap, [node1[0] + node2[0], 'parent'])
  
  
huffman(freq)
  
  