/*
Jan 15, 2019  -  JLF

Longest Collatz sequence
Problem 14

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
	n → 3n + 1 (n is odd)

	Using the rule above and starting with 13, we generate the following sequence:
	13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

	It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

	Which starting number, under one million, produces the longest chain?

	NOTE: Once the chain starts the terms are allowed to go above one million.
*/

#include <iostream>
using namespace std;





int main() {

	long lengthTracker = 0;
	long winningNumber = 0;
	long longestTrack = 0;
	long theNumber = 0;
	long i;

	cout << "\n\n---------------------------------------------------------------------------------------------------\n\n";


	for ( int i=2; i<1000000; i++ ) {
		theNumber = i;
//		cout << "\n--------------------------------------------------------------------\n";
//		cout << i;
		while ( theNumber != 1 ) {
			if ( theNumber%2 == 0 ) {
				theNumber = theNumber/2;
			} else {
				theNumber = ( 3*theNumber ) + 1;
			}
			lengthTracker++;
//			cout << " -> " << theNumber;
		} // end of while loop
	
		if ( longestTrack < lengthTracker ) {
			longestTrack = lengthTracker;
			winningNumber = i;
		} 

		lengthTracker = 1;
	} 
		cout << "\nFrom a C++ program:";
		cout << "\nwinningNumber => " << winningNumber;

	cout << "\n\n---------------------------------------------------------------------------------------------------\n\n";

} // end of main
