#! /usr/bin/env python3
import math

"""
Jan 9, 2019  -  JLF

10001st prime

Problem 7 

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

we are just reusing the code from problem 3, I think it was
"""
# --------------------------------------------------------------------------------------------------

def makeALine():
    print("")
    print("")
    print("***************************************************************************************")
    print("")
    print("")


# --------------------------------------------------------------------------------------------------

def isItPrime(numberToCheck):
    """ 
    this function takes as input a number and returns true 
    if that number is prime and false if it is not 
    """

    # check if numberToCheck is an even number, and return false if it is
    if ( numberToCheck%2 == 0 ):
        return False

    # this gets the highest number we need to test
    highNumber = int(math.sqrt(numberToCheck)) + 1

    ct1 = 3

    while ( ct1 <= highNumber ):
        if ( numberToCheck%ct1 == 0 ):
            return False
        ct1 = ct1 + 2

    return True

# --------------------------------------------------------------------------------------------------

def nextPrime(lastPrime):
    """ this function takes a number as input and finds the next highest prime number """
    
    if ( lastPrime == 2 ):
        return 3

    if ( lastPrime%2 == 0 ):
        lastPrime = lastPrime + 1

    lastPrime = lastPrime + 2;

    while ( isItPrime(lastPrime) == False ):
            lastPrime = lastPrime + 2;

    return lastPrime

# --------------------------------------------------------------------------------------------------
# --------------------------------------------------------------------------------------------------

def main():

    makeALine()
  
    currentPrime = 2
    primeCt = 2 
    # we calibrated those 2's above by trial and error
    # just keep getting nextPrime until prime counter is 10001
    while ( primeCt < 10002 ):
        currentPrime = nextPrime(currentPrime)
        primeCt = primeCt + 1

    print("the " + str(primeCt-1) + " prime is => " + str(currentPrime) )

    makeALine()


# --------------------------------------------------------------------------------------------------


main()



# --------------------------------------------------------------------------------------------------

