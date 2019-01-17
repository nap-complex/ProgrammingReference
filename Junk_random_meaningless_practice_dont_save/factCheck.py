









def factoid(n):
	fact = 1
	for i in range(1, n+1):
		fact = fact * i

	print("The factorial of n ", n, " is : ", end="")
	print(fact)



answer =  factoid(40) / ( factoid(20)*factoid(40-20) )

print(answer)



