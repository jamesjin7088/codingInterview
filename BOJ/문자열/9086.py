t = int(input())
arr = []

for i in range(t):
    a = input()
    arr.append(a)

for b in arr:
    print(b[0]+b[-1])