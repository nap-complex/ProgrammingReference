#! /usr/bin/env python3
import math

"""
Jan 9, 2019  -  JLF

Summation of primes

Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
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
    ct1 = 1
    sumOfPrimes = 2

    while ( currentPrime < 2000000 ):
        ct1 += 1
        currentPrime = nextPrime(currentPrime)
        if ( currentPrime < 2000000 ):
            sumOfPrimes = sumOfPrimes + currentPrime

    print("sum of all primes below 2,000,000 => ", sumOfPrimes)

    makeALine()


# --------------------------------------------------------------------------------------------------


main()



# --------------------------------------------------------------------------------------------------

