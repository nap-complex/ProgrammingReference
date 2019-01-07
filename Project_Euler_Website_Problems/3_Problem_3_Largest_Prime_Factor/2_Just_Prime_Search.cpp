#include <iostream>
#include <climits>
#include <cmath>
using namespace std;

/*

	Just a prime number program
	Jan 7, 2019 -  JLF


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
	long primeCount = 0;

	highNum = long(inputNumber/2) + 1;

	ct1 = 3;
	while ( ct1 <= inputNumber ) {
//		if (isItPrime(ct1)) { cout << "\nprime => " << ct1; }
		if (isItPrime(ct1)) { primeCount++; }
		ct1 = ct1 + 2;
	} // end of while loop

	cout << "\nprimeCount => " << primeCount << endl;

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




