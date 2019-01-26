#! /usr/bin/env python3
import math

""" 
Jan 26, 2019  -  JLF

Factorial digit sum
Problem 20

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
"""

print("***********************************************************************************")

sumThing = 0

v1 = math.factorial(100)

s1 = str(v1)

length = len(s1)

for i in range(length):
	sumThing = sumThing + int(s1[i])

print("The answer from a python3 program: ")
print("The sum of the digits in the factorial of 100 => ", sumThing)

print("***********************************************************************************")



