## Python Modules with JS

created by [wil953742](https://github.com/wil953742), [Nastro](https://github.com/Narastro)

### 1. class Deque

Implemented with DLL(Double Linked List) <br/>
It takes O(1) time with push, pushleft, pop, popleft methods

- Define
  <br/>
  `const deque = new Deque()` or <br/>
  `const deque = new Deque([1,2,3,4,5])`

- Variable & Method
  - **deque.length**: Return total length of deque
  - **deque.push(value)**: push value in the list from **right**
  - **deque.pushleft(value)**: push value in the list from **left**
  - **deque.pop()**: remove value from the right side of the list and return the value
  - **deque.popleft()**: remove value from the left side of the list and return the value
  - **deque.isEmpty()**: true when the length is 0, false otherwise

<br/>

### 2. class Heap(PriorityQueue)

It takes O(logN) time with push, pop and O(1) time with peek
<br/>

- Define
  <br/>
  `const heap = new Heap()` or <br/>
  `const heap = new Heap([5,4,3,2,1])`

- Variable & Method
  - **push(value)**: push value into the heap
  - **pop()**: remove head node and get the smallest value

<br/>

### 3. func Permutation & Combination

- How to use? <br/>
  `const permutation = Permutation([1,2,3,4], 2)` <br/>
  `const combination = Combination([1,2,3,4], 2)`

<br/>

### 4. class DefaultDict

<br/>

- Define
  <br/>
  `const defaultDict = new DefaultDict("int")` or <br/>
  `const defaultDict = new DefaultDict("list")` or <br/>
  `const defaultDict = new DefaultDict("set")` <br/>

- Variable & Method
  - **set(key, value)**: mapping key to value
  - **get(key)**: get value mapped by key
