#! /usr/bin/env python3

""" 
Jan 9, 2019  -  JLF

Special Pythagorean triplet
Problem 9 
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
""" 
print("---------------------------------------------------------------")

for a in range(500):
    for b in range(500):
        for c in range(500):
            if ( a + b + c == 1000 ):
                if ( a**2 + b**2 == c**2 ):
                    print("a = ", a, " b = ", b, " c = ", c)
                    print("The product is => ", a*b*c)
                    break


print("---------------------------------------------------------------")















