#!/usr/bin/env python3

#   start with any positive integer n. Then each term is obtained from the previous term as 
#   follows: if the previous term is even, the next term is one half the previous term. Otherwise, 
#   the next term is 3 times the previous term plus 1. The conjecture is that no matter what 
#   value of n, the sequence will always reach 1.


# how do you comment out in python?

def makeLine():
	print('\n\n**********************************************************\n\n')

def collatz(seedNumber):
	if ( seedNumber%2 == 0 ):
		seedNumber = ( seedNumber / 2 )
	else:
		seedNumber = ( ( seedNumber * 3 ) + 1 )
	return seedNumber

def main():

	makeLine()

	x = 1;
	seedNumber = 7000000 
	odd_or_even = "odd"
	counter = 1

	while x < 1000000:	
		seedNumber = collatz(seedNumber)
		if ( seedNumber % 2 == 0 ):
			odd_or_even = "even"
		else: 
			odd_or_even = "odd"
		print("seed number (" + str(counter) + ") => " + str(seedNumber) + " " + odd_or_even ) 
		x+=1
		counter+=1


	makeLine()

main()
