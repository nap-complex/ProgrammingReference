#include <iostream>
using namespace std;

/*
Jan 26, 2019  -  JLF

Amicable numbers
Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// ---------------------------------------------------------------------------------------------------------

// prototypes:
int findSomeDivisorsAndAddThemUp(int);

// ---------------------------------------------------------------------------------------------------------

int main() {

	cout << "\n\n***********************************************************************\n";

	int testVar;
	int numberToTest;	
	int sumOfAmicableNumbers;

	// This for loop loops thru numberToTest and adds up the proper divisors of that number.
	// Then it checks to see if the divisors of the sum of those divisors add up to the 
	// original numberToTest.  If so, we have an amicable number pair.  We are only finding and 
	// recording them one at a time because if we recorded both halfs of the pair in the end
	// we would have two copies of each pair and our final sum would be to high
	for ( numberToTest=2; numberToTest<10001; numberToTest++ ){
		testVar = findSomeDivisorsAndAddThemUp(numberToTest);
		if (( findSomeDivisorsAndAddThemUp(testVar) == numberToTest ) && ( testVar != numberToTest )) { 
			sumOfAmicableNumbers += numberToTest;
			// this next line prints out the Amicable numbers as we find them, or not if commented out
			// cout << "\nOne of them => " << numberToTest;
		}
	} // end of thing

	cout << "\nThe Answer from a c++ program:";
	cout << "\nThe sum of the amicable numbers less than 10,000 => " << sumOfAmicableNumbers;
	
	cout << "\n\n***********************************************************************\n";

	
}  // end of main

// ---------------------------------------------------------------------------------------------------------
int findSomeDivisorsAndAddThemUp(int testNumber) {
	// this function finds the proper divisors of testNumber, adds those up, and returns that sum

	int sumThing = 1;  // "1" is always gonna be a proper divisor, so we just start with that

	for ( int i=2; i<testNumber; i++ ){
		if ( testNumber%i == 0 ) {
			sumThing = sumThing + i;
		}

	}  // end of for

	return sumThing;

} // end of findSomeDivisorsAndAddThemUp
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------





