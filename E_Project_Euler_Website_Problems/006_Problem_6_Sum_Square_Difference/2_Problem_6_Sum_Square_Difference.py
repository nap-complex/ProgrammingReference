#! /usr/bin/env python3

"""
Jan 9, 2019  -  JLF

Sum square difference
Problem 6 
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
""" 
def makeLine():
    print(""); print("-----------------------------------------------------"); print("")

def main():
    makeLine()

    sumOfTheSquares = 0
    squareOfTheSums = 0
    theDifference = 0

    for i in range(1, 101):
#        print(i)
        sumOfTheSquares += i**2

    for i in range(1, 101):
#        print(i)
        squareOfTheSums += i
    squareOfTheSums = squareOfTheSums**2

#    print("sumOfTheSquares was => " + str(sumOfTheSquares))
#    print("squareOfTheSums was => " + str(squareOfTheSums))
    theDifference = squareOfTheSums - sumOfTheSquares

    print("And the difference was => " + str(theDifference))


    makeLine()

main()
