// rw-rw-r-- 1 jlf jlf    5438 Jan 13 13:44 mersenneCalculator.cpp
// This program does the powers of two, and subtracts
// 1 from the total to make a mersene number out of it
// so we can have the lagest primes on our system
// and then saves it to a file and stuff

#include <iostream>
#include <ctime>  // needed by endOfTime() function
#include <fstream>
#include <sstream>  // needed by endOfTime() function
#include <string>  // needed to use string clearing

using namespace std;

// constants:
const int arraySize = 1800000;
const int theNumber = 12718; // this is the n in the 2^n-1 
int powerRaised;

// prototypes:
void multByTwo( int* );
void showArray( int* );
void mersenneIt( int* );
void saveToFile( int* );
void calculateOneMersenne ( int* );
string endOfTime();


// ---------------------------------------------------------------
// COME UP WITH SOME WAY OF CHECKING PROGRESS

int main() {

 
	int* a1;
	a1 = new int [arraySize];
	int ct1;


	cout << "\n\n\n********************************************\n";

		cout << endOfTime();
		cout << endl;
		powerRaised = theNumber;
		calculateOneMersenne ( a1 );
		cout << "\nThe array is => ";
		showArray( a1 );
		cout << endl;
		cout << endOfTime();

	cout << "\n********************************************\n\n\n";

	return 0;
} // end of main

// ---------------------------------------------------------------
void calculateOneMersenne ( int* a1 ) {


	clock_t start, end;
	int i, ct1;
	// errorCorrect exists cause we already have a 2 in the array
	// when this looping starts so powerRaised is 1 too many
	int	errorCorrect = powerRaised - 1;
	ofstream logFile; // this is here to set up writing to log file


	// get the array set to 1 digit and 2 as that digit
	a1[0] = 1;
	a1[1] = 2;

	// this starts the timing
	start = clock();

	// this line does the math:
	for ( i=0; i<errorCorrect; i++ ) multByTwo(a1);

	mersenneIt(a1); // this just subtracts 1 from the big number to make it a mersenne 

	cout << "\nDone calculation, now writing to file.\n";
	saveToFile(a1);

	// this ends the timing
	end = clock();
	// this calculates and prints out the time
	cout << "\n\nTime to calculate array => " << (double)(end-start)/CLOCKS_PER_SEC << " seconds\n";

	// this part is an attempt to write the time that this took to a file
	logFile.open ("mersenneLogFile.txt", std::ios_base::app);
	logFile << "\nmersenne with n of " << theNumber << " took ";
	logFile <<(double)(end-start)/CLOCKS_PER_SEC << " seconds to find " << endl;
	logFile.close();

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
void showArray( int* a1 ) {

	int i;

	cout << endl;
	if ( a1[0] < 60 ) {
	cout << "\n(2^" << powerRaised << ")-1 is(" << a1[0] << "): ";
	for ( i=a1[0]; i>0; i-- ) { if ( i%3==0 ) cout << " "; cout << a1[i]; }
	} else {
		cout << "\n(2^" << powerRaised << ")-1 is(" << a1[0] << "):\n";
		for ( i=a1[0]; i>a1[0]-40; i-- ) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; }
		cout << " ... \n ... ";
		for ( i=40; i>0; i-- ) { if ( i%3 == 0 ) cout << " "; cout << a1[i]; }
		} // end of else

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
	//jlf 
	myfile << endl;
	myfile.close();	

	cout << "\nThis number was saved in text file: " << name;

} // end of saveToFile
// ---------------------------------------------------------------


string endOfTime() {

	time_t currentTime;
	struct tm *localTime;

	time ( &currentTime );
	localTime = localtime( &currentTime );

	int day = localTime->tm_mday;
	int month = localTime->tm_mon;
	int year = localTime->tm_year + 1900;
	int hour = localTime->tm_hour;
	int min = localTime->tm_min;
	int sec = localTime->tm_sec;

	string months[] = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};

	ostringstream time_string;
	string displayString;

	time_string << months[month] << " " << day << ", " << year << "  "<< hour << ":"<< min << ":"<< sec;

	displayString = time_string.str();

	return displayString;
} // end of time

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------



