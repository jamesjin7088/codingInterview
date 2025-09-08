n, m = map(int, input().split())
box = []

for _ in range(n):
    box.append(_+1)

for _ in range(m):
    i, j = map(int, input().split())
    box[i-1:j] = box[i-1:j][::-1]

print(*box)