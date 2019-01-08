#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

/*

	Jan 7, 2019 -  JLF

	Largest prime factor - project euler problem 3

  	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?

*/

// prototypes

bool isItPrime(long);
long makeTheNextPrime(long); 
void makeLine();

// ------------------------------------------------------------------------------------------------------------------

int main() {

	makeLine();   // this is here to format output for readability

	long inputNumber = 600851475143;
//	long inputNumber = 13195;              // test number
//	long inputNumber = 1234567890;         // test number
//	long inputNumber = 17;                 // test number
	long targetNumber = inputNumber;
	long ct1;
	vector<long> factors;
	bool wasItPrime;
	long largestPrimeFactor = 0;

	// ----------------------------------------------------------------------------	

	// The introduction in the output
	cout << "\nWe will now find the prime factors of " << inputNumber;

	// ----------------------------------------------------------------------------	


	// check to see if the inputNumber is a prime number
	// this is probably not needed, but is here in case the source of
	// the input number is jerking around with us
	if ( isItPrime(inputNumber) ) {
		wasItPrime = true;
		cout << "\nThe test number itself was a prime number.  Done. ";
	} else {
		wasItPrime = false;
	}
	
	// ----------------------------------------------------------------------------	

	// if inputNumber was not a prime number... staaaaaart factoring
	if ( !wasItPrime ) {
		
		ct1 = 2;  // this is the prime number for testing the target number

		// targetNumber will be "1" when it has been completely factored, and we're done
		while ( targetNumber != 1 ) {

			// if ct1 is a factor of targetNumber, add ct1 to the list of factors, then
			// test if ct1 will factor into targetNumber again, dividing targetNumber by the
			// new factor to get the next targetNumber
			if ( (targetNumber%ct1) == 0 ) {
				factors.push_back(ct1);
				targetNumber = targetNumber / ct1;
			// if ct1 will not factor into target number move on to the next higher prime
			// and try that
			} else {
				ct1 = makeTheNextPrime(ct1);
			} // end of if else

		} // end of while

	} // end of if ( !wasItPrime ) {

	// ----------------------------------------------------------------------------	

	// display the factors found:
	cout << "\nThe Prime Factors:";
	if ( !wasItPrime ) {
		for ( unsigned long i = 0; i < factors.size(); i++ ) {
			// this next if statement filters for the largest factor
			if ( factors[i] > largestPrimeFactor ) { largestPrimeFactor = factors[i]; } 
			cout << factors[i] << " ";
		} 
	} else {
		cout << "\nThe only prime factors are 1 and the number itself => " << inputNumber;
	} 

	// ----------------------------------------------------------------------------	

	// but the question was, what is the largest prime factor, so...
	cout << "\nso... the largest prime factor is => " << largestPrimeFactor;

	// ----------------------------------------------------------------------------	

	makeLine();   // this is here to format output for readability

} // end of main

// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------

// this function takes as input a number and returns true if that number if prime and false if it is not
// We are ignoring the number 2 being prime, so don't test for that
bool isItPrime(long num) {

	long highestTestNumber;
	long num1;

	// if the testnumber is even then stop right there and return false
	if ( num%2==0 ) return false;

	// the square root of num plus 1 is the highest number we need to test for, so find it	
	highestTestNumber = long(sqrt(num) + 1);

	// now check the odd numbers, starting with three and ending at highestTestNumber
	// if anything mods zero return false
	num1 = 3;
	while ( num1 <= highestTestNumber ) {
		if ( num%num1==0 ) return false;	
		num1 = num1 + 2;
	} // end of while loop

	// if you got this far it must be prime, so return true
	return true;

} // end of isItPrime

// ------------------------------------------------------------------------------------------------------------------

// this function makes a line accross the output screen purely for format readability
void makeLine() {
	cout << "\n\n---------------------------------------------------------------------------------\n\n";
} // end of makeLine

// ------------------------------------------------------------------------------------------------------------------

// this function takes as input a prime number ( hopefully, there's no error checking ) and returns the next higher prime number
long makeTheNextPrime(long num) {

	if ( num == 2 ) return 3;

	num = num + 2;

	while ( !isItPrime(num) ) {
		num = num + 2;
	} // end of while

	return num;

} // end of makeTheNextPrime

// ------------------------------------------------------------------------------------------------------------------




