#! /usr/bin/env python3



def makeLine():
	print("");
	print("------------------------------------------------------------------------------------------------------------------------");
	print("");


def main():

	lengthTracker = 1;
	winningNumber = 0;
	longestTrack = 0;
	theNumber = 0

	makeLine()


	for i in range(2,1000000):
		theNumber = i
		
		while ( theNumber != 1 ):
			if ( theNumber%2 == 0 ):
				theNumber = theNumber / 2
			else:
				theNumber = ( 3*theNumber ) + 1
			lengthTracker = lengthTracker + 1

		if ( longestTrack < lengthTracker ):
			longestTrack = lengthTracker
			winningNumber = i

		lengthTracker = 1

	print("from a Python program:")
	print("winningNumber => ", winningNumber)


	makeLine()

main()
