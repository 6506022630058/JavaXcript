def analyze_sets(A,B,C):
    w1 = '{'
    w2 = '}'
    O1 = ''
    for b in B:
        if b % min(A) == 0:
            O1 = O1  + str(b) + ', '
    O1 = O1.rstrip(', ')
    O2 = ''
    for c in C:
        if max(A) % c != 0:
            O2 = O2 + str(c) + ', '
    O2 = O2.rstrip(', ')
    O3 = min(A) + min(B) + min(C)
    return print(f"The given SET are A:{A} B:{B} C:{C} \nThe Result are : {w1}{O1}{w2} {w1}{O2}{w2} {O3}\n")


analyze_sets({1,2,3},{9,3,6},{1,4,7})
analyze_sets({2,4},{8,12,15},{1,3})
analyze_sets({3},{1,2,3},{3,4,5})
analyze_sets({10,5},{10,20,30},{1,2,4})