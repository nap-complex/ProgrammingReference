// this program finds prime numbers up to INT_MAX, so far
// 20151216

#include <iostream>
#include <cmath>
#include <climits>
#include <fstream>
#include <string>
#include <time.h>
using namespace std;

// ---------------------------------------------------------------
// prototypes:


bool isPrimeTest (int);


// ---------------------------------------------------------------

int main() { 

ofstream xfile;
int testNum, i, ct=0;
int numOfPrimes = 1;
//int upperValue = INT_MAX-1;
//int lowerValue = INT_MAX-10000;
int upperValue = 4000000;
int lowerValue = 3; 
time_t start, end;

//string fileName = "prime_Numbers_Up_To_INT_MAX.txt";

cout << "\n----------------------------------------\n";

	start = clock();


for (testNum=3; testNum<upperValue; testNum += 2) {
	if (isPrimeTest(testNum)) 
	{

	numOfPrimes++;
	cout << "\nPrime number #" << numOfPrimes << " is => " << testNum;
	
	} // end of (isPrime...	

	} // end of for (testNum...


	end = clock();
	cout << "\nTime: ";
	cout << (double)(end-start)/CLOCKS_PER_SEC;
	cout << " seconds\n";

cout << "\n----------------------------------------\n";

return 0;
} // end of main


// ---------------------------------------------------------------
bool isPrimeTest (int testNum) {

int i2;

	for (i2=3; i2<(sqrt(testNum)+1); i2+=2)
		if (testNum%i2==0) return false;
		
	return true;

} // end fo isPrimeTest


// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
