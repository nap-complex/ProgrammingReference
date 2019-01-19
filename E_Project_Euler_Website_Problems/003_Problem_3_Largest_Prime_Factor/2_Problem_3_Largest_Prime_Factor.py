#! /usr/bin/env python3
import math

"""
	Jan 7, 2019 -  JLF

	Largest prime factor - project euler problem 3

  	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?
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
#    inputNumber = 190
    inputNumber = 600851475143
    targetNumber = inputNumber
    checkFactor = 2
    factors = []
    largestPrimeFactor = 0


    while ( targetNumber != 1 ):
        if ( targetNumber%checkFactor == 0 ):
            factors.append(checkFactor)
            targetNumber = targetNumber / checkFactor
        else:
            checkFactor = nextPrime(checkFactor)

    print("From the Python program:")

    print("The prime factors of " + str(inputNumber) + " are ")
    for i in factors:
        print(str(i) + " "),
        if ( i > largestPrimeFactor ):
            largestPrimeFactor = i

    print("The largestPrimeFactor => " + str(largestPrimeFactor))


    makeALine()


# --------------------------------------------------------------------------------------------------


main()



# --------------------------------------------------------------------------------------------------

