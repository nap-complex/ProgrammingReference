#include <iostream>
using namespace std;
/*
   Jan 27, 2019  -  JLF

   Non-abundant sums
   Problem 23

   A perfect number is a number for which the sum of its proper divisors is exactly 
   equal to the number. For example, the sum of the proper divisors of 28 would 
   be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

   A number n is called deficient if the sum of its proper divisors is less than n 
   and it is called abundant if this sum exceeds n.

   As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number 
   that can be written as the sum of two abundant numbers is 24. By mathematical analysis, 
   it can be shown that all integers greater than 28123 can be written as the sum of two 
   abundant numbers. However, this upper limit cannot be reduced any further by analysis 
   even though it is known that the greatest number that cannot be expressed as the sum 
   of two abundant numbers is less than this limit.

   Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

   thinkin' =>

   1. find the proper divisors of a number
	a. 1 is always a proper divisor, so just start with that and then:
	b. find the next proper devisor

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
	
	for ( testNumber = 1; testNumber < 28; testNumber++ ) {
		cout << "something";
//	for ( testNumber = 1; testNumber < 28123 + 1; testNumber++ ) {
		if (!isItTheSumOf2AbundantNumbers(testNumber)){
			cout << testNumber << ".";
			totalSumThing = totalSumThing + testNumber;
		} else cout << "not "; 
	}

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
