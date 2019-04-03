#! /usr/bin/env python3

'''
   Jan 27, 2019  -  JLF

   Non-abundant sums
'''

#// ---------------------------------------------------------------------------------------------------------


#// ---------------------------------------------------------------------------------------------------------
 
def sumOfDivisors(testNumber):

    sumOf = 0;

    r1 = int( ( testNumber / 2 ) + 1 )
    for i in range(1, r1):
        if ( testNumber % i == 0 ):
            sumOf = sumOf + i

    return sumOf;

#// ---------------------------------------------------------------------------------------------------------

def isItAnAbundantNumber(testNumber):

    if ( testNumber < sumOfDivisors(testNumber) ):
        return True

    return False

#// ---------------------------------------------------------------------------------------------------------
#// ---------------------------------------------------------------------------------------------------------

def main():

	list1 = []

	for testNumber in range(13, 150):
		if (isItAnAbundantNumber(testNumber)):
			list1.append(testNumber)
	
	print("size => ", len(list1))

	for i in range(len(list1)):
		print("(", i, ") ", list1[i])

	print("***********************************************************")
	print("something in the middle.")
	print(sumOfDivisors(testNumber))
	print("***********************************************************")

#// ---------------------------------------------------------------------------------------------------------

main()
