#! /usr/bin/env python3

"""
/*
Jan 16, 2019  -  JLF

Lattice paths
Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the 
right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/
"""
#----------------------------------------------------------------------------------------------------------
def nChooseRthatBitch(num2, r_thing):
	return factorialThatBitch(num2) / ( factorialThatBitch(r_thing) * factorialThatBitch(num2-r_thing) );

#----------------------------------------------------------------------------------------------------------
def factorialThatBitch(num1):
	holder = 1;
	for i in range(1, num1+1):
		holder = holder * i
	return holder

#----------------------------------------------------------------------------------------------------------
def makeLine():
	print("");
	print("");
	print("******************************************************************************************************");
	print("");
	print("");
	
#----------------------------------------------------------------------------------------------------------
def main():
	
	makeLine()

	n = 40 
	r = 20 

	print("The answer from the python program: ")
	print("lattice paths answer => ", nChooseRthatBitch(n, r))

	makeLine()

#----------------------------------------------------------------------------------------------------------

main()

#----------------------------------------------------------------------------------------------------------
