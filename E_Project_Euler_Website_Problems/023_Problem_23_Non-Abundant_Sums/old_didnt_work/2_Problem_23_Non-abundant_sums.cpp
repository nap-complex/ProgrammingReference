#include <iostream>
using namespace std;
/*
   Jan 27, 2019  -  JLF

   Non-abundant sums
*/

// ---------------------------------------------------------------------------------------------------------

// prototypes:
bool isItAnAbundantNumber(int testNumber);
int sumOfDivisors(int testNumber);
bool isItTheSumOf2AbundantNumbers(int testNumber);

// ---------------------------------------------------------------------------------------------------------

int main(){
 
	cout << "\n\n********************************************************\n";

	int testNumber;
	int totalSumThing;
	
	cout << "nothing";
	totalSumThing = 0;	

	cout << "\nSum of non-thing numbers => " << totalSumThing;

	cout << "\n\n********************************************************\n";

} // end of main

// ---------------------------------------------------------------------------------------------------------
 
int sumOfDivisors(int testNumber) {
	
	int sumOf = 1;

	for ( int i = 2; i < (( testNumber/2 ) + 1); i++ ) {
		if ( testNumber % i == 0 ) sumOf = sumOf + i;
	}

	return sumOf;

} // end of sumOfDivisors

// ---------------------------------------------------------------------------------------------------------


bool isItAnAbundantNumber(int testNumber) {
	
	if ( testNumber < sumOfDivisors(testNumber) ) return true;

	return false;

} // end of isItAnAbundantNumber

// ---------------------------------------------------------------------------------------------------------

bool isItTheSumOf2AbundantNumbers(int testNumber) {

	int an1, an2;

	if ( testNumber < 12 ) return false;
	if ( testNumber > 28123 ) return true;

	for ( an1 = 12; an1 < (( 28123 / 2 ) + 1 ); an1++) {

		if ( isItAnAbundantNumber(an1) ) {
		for ( an2 = 12; an2 < (( 28123 / 2 ) + 1); an2++) {
				
			if ( isItAnAbundantNumber(an2) ) {
				if ( an1 + an2 == testNumber ){
				   	return true;
					cout << ",";
				}
			}
			
			}
			}
	}

	return false; 



} // end of isItTheSumOf2AbundantNumbers

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
