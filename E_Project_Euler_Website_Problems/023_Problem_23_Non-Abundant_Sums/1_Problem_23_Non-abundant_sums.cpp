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
int findNextProperDivisor(int currentDivisor, int testNumber);  // return next proper divisor
bool isItAnAbundantNumber(int testNumber);

// ---------------------------------------------------------------------------------------------------------

int main(){
 
	cout << "\n\n********************************************************\n";

	int testNumber = 12;

	if ( isItAnAbundantNumber(testNumber) ) cout << "\nit was!";
	else cout << "\nit weren't";



	cout << "\n\n********************************************************\n";

} // end of main

// ---------------------------------------------------------------------------------------------------------

bool isItAnAbundantNumber(int testNumber) {

	int cnt1;
	int sumOfDivisors = 0;

	cout << "\nAnd now, for some proper divisors: \n";

	cnt1 = 1;
	sumOfDivisors = sumOfDivisors + cnt1;

	while ( true ) {
		cnt1 = findNextProperDivisor(cnt1, testNumber);
		if ( cnt1 == -1 ) break;
		sumOfDivisors = sumOfDivisors + cnt1;
	} // end of while
	
	if ( sumOfDivisors > testNumber ) return true;

	return false;

} // end of isItAnAbundantNumber

// ---------------------------------------------------------------------------------------------------------

int findNextProperDivisor(int currentDivisor, int testNumber) {

	int maybeDivisor;
	
	maybeDivisor = currentDivisor + 1;

	while ( maybeDivisor < ( testNumber / 2 ) + 1 ) {
		if ( testNumber%maybeDivisor == 0 ) {
			return maybeDivisor;
		} 

	} // end of while
	
	return -1;

} // end of findNextProperDivisor
	
	

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------
