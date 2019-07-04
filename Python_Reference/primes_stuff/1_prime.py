#!/usr/bin/env python3
import math


# ------------------------------------------------------------------------------------

def makeLine():
	print('')
	print('************************************************************')
	print('')

# ------------------------------------------------------------------------------------

def isItPrime( startNum ):

	maxTestNum = int(math.ceil(math.sqrt(startNum)))
	
	if ( startNum % 2 == 0 ):
		return(0)

	cnt1 = 3
	while ( cnt1 <= maxTestNum ):
		if ( startNum % cnt1 == 0 ):
			return(0)
		cnt1 += 2
	return(1)

# ------------------------------------------------------------------------------------
 
def main():

	makeLine()

#	startNum = 3
	startNum = 1000000000000
	if ( startNum % 2 == 0 ):
		startNum += 1

	maxTest = startNum + 100000
#	maxTest = startNum + 100

	print('startNum => ' + '{:,}'.format(startNum))
	print('maxTest  => ' + '{:,}'.format(maxTest))

	print('')
	print('')
	
	while ( startNum < maxTest ): 
		if ( isItPrime(startNum) == 1 ):
			print('Prime Number => ' + '{:,}'.format(startNum))
		startNum += 2;

	makeLine()

# ------------------------------------------------------------------------------------

if __name__ == "__main__":
	main()

# ------------------------------------------------------------------------------------

# ------------------------------------------------------------------------------------

