#include <iostream>
// next line for square root:
#include <cmath>
using namespace std;


// ----------------------------------------------------------------------------------------
bool isItPrime(int testNum) {
	
	int upperLimit = int(ceil(sqrt(testNum)));
	int i;

	if ( testNum % 2 == 0 ) {
		return false;
	} // end of if...
	
		
	for ( i=3; i<=upperLimit; i+=2 ) {
		if ( testNum % i == 0 ) {
			return false;
		} // end of if ...
	} // end of for...
	return true;		
} // end of isItPrime...

// ----------------------------------------------------------------------------------------
void makeLine() {
	cout << "\n\n*********************************************************************\n\n";
} // end of makeLine


// ----------------------------------------------------------------------------------------

int main() {

	int testNum;
	int startNum;
	int stopNum;

	makeLine();

	startNum = 20;
	stopNum = 100;

	// make sure startNum is an odd number:
	if ( startNum % 2 == 0 ) startNum++;

	for (testNum=startNum; testNum<stopNum; testNum+=2 ) {
		if ( isItPrime(testNum) ) cout << "\n" << testNum << " is Prime!!!";
	} 

	makeLine();

} // end of main


// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
