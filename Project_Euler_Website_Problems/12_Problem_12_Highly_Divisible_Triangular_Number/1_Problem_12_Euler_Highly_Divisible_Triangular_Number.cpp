#include <iostream>
using namespace std;

/*
"""
Jan 12, 2019  -  JLF

Highly divisible triangular number

Problem 12 

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
"""
*/
// ---------------------------------------------------------------------

void makeLine(){
	cout << "\n\n************************************************************\n\n";
} // end of makeLine()

// ---------------------------------------------------------------------

int numOfDivisors(int thing){

	int cnt1 = 1;
	int i;
	
	for ( i=1; i<thing; i++) {
		if ( thing%i == 0 ) { 
			cnt1++; 
//			cout << "\ni => " << i;
//			cout << "  thing => " << thing;
		} 
	} // end of for

//	cout << "\ncnt1 => " << cnt1;

	return cnt1;

} // end of numOfDivisors

// ---------------------------------------------------------------------


// ---------------------------------------------------------------------

int main(){

	int iterator;
	int markUpEr;
	int numDivs;

	makeLine();

	iterator = 1;
	markUpEr = 1;

	while ( markUpEr < 100000000 ) {

		if ( numDivs > 500 ) {
			cout <<"\nThe first triangle number with more than 500 divisors is => " << markUpEr;
			if ( numDivs > 500 ) { break; }
		}
		iterator++;
		markUpEr = markUpEr + iterator;
		numDivs = numOfDivisors(markUpEr);

	} // end of while

	makeLine();

} // end of main





