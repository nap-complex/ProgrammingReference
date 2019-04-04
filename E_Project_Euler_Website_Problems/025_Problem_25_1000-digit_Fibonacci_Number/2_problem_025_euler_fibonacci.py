#! /usr/bin/env python3

"""
April 3, 2019  -  JLF

1000-digit Fibonacci number
Problem 25

The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.

Hence the first 12 terms will be:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144

The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

/*
   order of array adding:
	1) copy f2 into f1
	2) copy f3 into f2
	3) ad f1 and f2 together and store that answer in f3
	repeat until you get the desired result

	start process with step three because we gave f1 and f2 default values
*/
"""

# -----------------------------------------------------------------------------------------------------


def make_line():
	print("");
	print("--------------------------------------------------------------------------------------");
	print("");


# -----------------------------------------------------------------------------------------------------


def main():

	make_line()


	f1 = 1
	f2 = 1
	f3 = 0
	counter = 2;

	# this while loop keeps making fibonacci numbers until it gets to on that is 
	# 1000 digits long, then it stops 
	while ( len(str(f3)) < 1000 ):
		counter = counter+1
		f3 = f1 + f2
		f1 = f2
		f2 = f3

	# this is the left over fib number from the while loop printed out as the answer
	print("The answer from a python program =>  ", counter)

	make_line()


# -----------------------------------------------------------------------------------------------------


main()


# -----------------------------------------------------------------------------------------------------

