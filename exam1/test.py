def maxProductExplanation(n):
    input = n
    arr = []
    while n > 0:
        if n > 3:
            n -= 3
            arr.append(3)
        elif n > 2:
            if n == 3 and arr != []:
                n -= 3
                arr.append(3)
            else:
                n -= 2
                arr.append(2)
        elif n >= 1:
            if n == 2 and arr != []:
                n -= 2
                arr.append(2)
            else:
                n -= 1
                arr.append(1)
    if arr[0] == 3 and arr[len(arr)-1] == 1:
        arr[0] = 2
        arr[len(arr)-1] = 2
    if len(arr) > 2 and 1 in arr and 2 in arr:
        arr.remove(1)
        arr.remove(2)
        arr.append(3)
    arr = sorted(arr)
    output = 1
    for i in arr:
        output *= i

    
    return f"/tExplanation: " + str(input) + " = " + " + ".join(str(x) for x in arr) + ", " + " × ".join(str(x) for x in arr) + " = " + str(output)

# Input: n = 2
# Output: 1
# Explanation: 2 = 1 + 1, 1 × 1 = 1

print(maxProductExplanation(2))
print(maxProductExplanation(5))
print(maxProductExplanation(7))
print(maxProductExplanation(10))
print(maxProductExplanation(15))



