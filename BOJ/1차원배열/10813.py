N, M = map(int, input().split())
box = []

for a in range(N):
    box.append(a+1)

for b in range(M):
    i, j = map(int, input().split())
    box[i-1], box[j-1] = box[j-1], box[i-1]

for c in range(N):
    print(box[c], end = ' ')