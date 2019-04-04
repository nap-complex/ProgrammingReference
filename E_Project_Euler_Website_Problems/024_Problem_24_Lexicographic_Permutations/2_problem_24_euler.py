#! /usr/bin/env python3

import itertools

"""
April 3, 2019  -  JLF

Lexicographic permutations
Project Euler - Problem 24

A permutation is an ordered arrangement of objects. For example, 3124 is one possible 
permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically 
or alphabetically, we call it lexicographic order. The lexicographic permutations 
of 0, 1 and 2 are:

	012   021   102   120   201   210

	What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

	hmmm... that's almost cheating with python
"""

# ---------------------------------------------------------------------------------------------

def make_line():
	print("");
	print("***************************************************************************************");
	print("");

# ---------------------------------------------------------------------------------------------

def main():

	make_line()


	the_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


	permutations = itertools.permutations(the_list, 10)


	counter_thing = 0;


	for perm_num in permutations:
		counter_thing = counter_thing + 1
		if ( counter_thing == 1000000 ):
			break;


	print("The answer from a python program => ", perm_num)


	make_line()

# ---------------------------------------------------------------------------------------------

main()

# ---------------------------------------------------------------------------------------------

