#! /usr/bin/env Python3

"""
    Jan 6, 2019  -  JLF

    Project Euler problem 1
    
    Find all multiples of 3 and 5 less than 1000 and add them up.

""" 

def makeLine():
    print(""); print("-----------------------------------------------------------------------------"); print(""); 


#--------------------------------------------------------

makeLine()

theNumber = 0 

for i in range(1000):
    if ( ( i%3==0 ) or ( i%5==0 )):
        theNumber = theNumber + i;

print("From the Python3 program:")
print("The sum of all multiples of 3 and 5 from 0 to 1000  =>  " + str(theNumber))

makeLine()
