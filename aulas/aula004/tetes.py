def paiem(n=0):
    if n % 2 == 0:
        n = 'par'
    else:
        n = 'ímpar'
    return n
res = paiem(3)
print(res)
