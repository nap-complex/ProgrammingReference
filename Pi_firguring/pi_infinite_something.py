#! /usr/bin/env python3
import math


def makeLine():
	print("");
	print("");
	print("*******************************************************************************");
	print("");
	print("");


def main():

	makeLine()
	print("Did something happen?")
	
	tau = 0.0

	num1 = 1

	for i in range(1, 200000000):
		tau = tau + (1 / i**2)

	print("tau => ", tau)
	
	pi1 = ( math.sqrt(6 * tau) )

	print("pi1 => ", pi1)
	makeLine()


main()
