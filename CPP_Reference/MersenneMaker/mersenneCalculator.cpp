// This program does the powers of two, and subtracts
// 1 from the total to make a mersene number out of it
// so we can have the lagest primes on our system
// and then saves it to a file and stuff

#include <iostream>
#include <time.h>
#include <fstream>
#include <sstream>
#include <string>  // needed to use string clearing

using namespace std;

// constants:
const int arraySize = 18000000;
int powerRaised;

// prototypes:
void multByTwo( int* );
void showArray( int* );
void mersenneIt( int* );
void saveToFile( int* );
void calculateOneMersenne ( int* );
int timeTest();


// ---------------------------------------------------------------
// 1 COME UP WITH SOME WAY OF CHECKING PROGRESS
// 2 make it log times, numbers, etc, in seperate file, unless
//	you can make the timer work in file name somehow.... actuall,
//  seperate file better, then we can run analysis

int main() {

 
	int* a1;
	a1 = new int [arraySize];
	int ct1;


	cout << "\n********************************************\n";
		timeTest();

//	powerRaised = 50000;

	// this loops through some numbers and uses them as exponets 
//	for ( ct1=1; ct1<100; ct1+=1 ) {
		powerRaised = 100000;
		calculateOneMersenne ( a1 );
//		} // end of something
		timeTest();
	cout << "\n********************************************\n";

	return 0;
} // end of main

// ---------------------------------------------------------------
void calculateOneMersenne ( int* a1 ) {


	clock_t start, end;
	int i, ct1;
	// errorCorrect exists cause we already have a 2 in the array
	// when this looping starts so powerRaised is 1 to many
	int	errorCorrect = powerRaised - 1;


	// get the array set to 1 digit and 2 as that digit
	a1[0] = 1;
	a1[1] = 2;

	// this starts the timing
	start = clock();

	// this line does the math:
	for ( i=0; i<errorCorrect; i++ ) { 
		multByTwo(a1);
		if ( i%10000 == 0 ) cout << "\ndigits => " << i;
		} 

	mersenneIt(a1); // this just subtracts 1 from the big number to make it a mersenne 
/*
	// this outputs the answer to the screen
	cout << "\n(2^" << powerRaised << ")-1 is(" << a1[0] << "): ";
	for ( i=a1[0]; i>0; i-- ) { if ( i%3==0 ) cout << " "; cout << a1[i]; }
*/
	cout << "\nDone calculation, now writing to file.\n";
	saveToFile(a1);

	// this ends the timing
	end = clock();
	
	// this calculates and prints out the time
	cout << "\nTime: " << (double)(end-start)/CLOCKS_PER_SEC << " seconds\n";


} // end of calculateOneMer....
// ---------------------------------------------------------------
void multByTwo( int* a1 ) {

	int i;
	int holder = 0;

	for ( i=1; i<=a1[0]; i++ ) {
		a1[i] = ( a1[i]*2 ) + holder;
		if ( a1[i]>9 ) { 
			holder=1; 
			a1[i] = a1[i] - 10;
			 
			if ( i==a1[0] ) a1[0]++; 
		} else holder = 0;

		} // end of for...

} // end of multByTwo
// ---------------------------------------------------------------
void showArray( int* a ) {
	int i;

	cout << "\nArrya => ";
	for (i=0; i<20; i++ ) cout << a[i] << "(" << i << ").";
//	for (i=1; i<a[0]+1; i++ ) cout << a[i] << ".";

	cout << endl;
	for ( i=a[0]-1; i>0; i-- ) cout << a[i] << ".";
	cout << endl;

} // end of showArray(...
// ---------------------------------------------------------------
void mersenneIt( int* a1 ) {

	a1[1]--;

} // end of mersenneIt...
// ---------------------------------------------------------------
void saveToFile( int* a1 ) {

	int ct1;
	ofstream myfile;
	string name;	
	// the following two lines are needed to add int to filename
	ostringstream convString;
	string addString;


	// these two lines take the int powerRaised and make it a 
	// string that we can add to "name" as the new filename
	convString << powerRaised;
	addString = convString.str();

	// this next line adds the "power raised to" to the file name
	name = "Mersenne_(2^" +  addString + ")-1__";

	convString.str("");  // seems to be needed to empty this string

	// this next part adds the number of digits in number to the file name
	convString << a1[0];
	addString = convString.str();
	name += addString + "_digits_long.txt";

	myfile.open ( name.c_str() );
	for ( ct1=a1[0]; ct1>0; ct1-- ) myfile << a1[ct1];
	myfile.close();	

	cout << "\nThis number was saved in text file: " << name;

} // end of saveToFile
// ---------------------------------------------------------------
int timeTest() {

	time_t rawtime;
	struct tm * timeinfo;

	time ( &rawtime );
	cout << "\nCurrent time? => " << ctime (&rawtime);

	cout << "\nwe be in timeTest\n";
	return 0;
} // end of timeTest....
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------



