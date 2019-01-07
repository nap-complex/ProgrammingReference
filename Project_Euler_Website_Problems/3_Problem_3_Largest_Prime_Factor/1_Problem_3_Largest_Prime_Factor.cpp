#include <iostream>
#include <climits>
#include <cmath>
using namespace std;

/*


Largest prime factor
Problem 3 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// prototypes

bool isItPrime(long);
void makeLine();

// ------------------------------------------------------------------------------------------------------------------

int main() {

	makeLine();

	long inputNumber = 600851475143;
	long highNum;
	long ct1;

	// we need this mess to see if an int or long was needed for these maths, turned out to be a long
//	cout << "\nTest Number is => " << 600851475143 << endl;
//	cout << "\nINT_MAX might be => " << INT_MAX << endl;
//	cout << "\nLONG_MAX might be => " << LONG_MAX << endl;

	if (isItPrime(inputNumber)) {
		cout << "\nOur test number  was prime!";
	} else {
		cout << "\nOur test number is not prime, apparently.";
	} 

	// find the highest number that could be a factor
	// I think this is wrong, I think we need to check all the way 
	// to half the number, so comment this out for now
	//	highNum = long(sqrt(inputNumber) + 1);

	highNum = long(inputNumber/2) + 1;
	cout << "\nhighNum => " << highNum << endl;
	
	// check for factors
	for ( ct1=2; ct1<=highNum; ct1++ ) {
		if ( inputNumber%ct1==0 ) {
			if ( isItPrime(ct1) ) {
				cout << "\nwe found a prime factor => " << ct1 << endl;
			}
		}


	} // end of for loop




	makeLine();
	

} // end of main


// ------------------------------------------------------------------------------------------------------------------
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


void makeLine() {
	cout << "\n\n---------------------------------------------------------------------------------\n\n";
} // end of makeLine
// ------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------




