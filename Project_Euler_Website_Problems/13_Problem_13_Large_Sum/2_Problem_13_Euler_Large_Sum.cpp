#include <iostream>
#include <fstream>
using namespace std;

/*
   Jan 15, 2019  -  JLF

   Large Sum

   Problem 13

   Work out the first ten digits of the sum of the follwoing one-hundred 50-digit numbers.
   ( see data file for numbers )
*/

// prototypes:
void makeLine();
int conChar(char);

// ---------------------------------------------------------------------


int main(){
	
	ifstream cin("data");
	string str1;
	int answer[60] = {0};
	int cnt1;
	bool leadZero = true;

	makeLine();

	// This part reads in the data and converts strings to ints and adds them all up
	for ( int x=0; x<100; x++ ) {
		getline(cin, str1);
		cnt1 = 0;
		for ( int i=49; i>=0; i-- ) {
			answer[i] = answer[i] + conChar(str1[cnt1]);
			cnt1++;
		}
	}

	// carry over the numbers in the array: any number bigger than 9 gets 
	// carried over to the next column
	for ( int i=0; i<60; i++ ) {
		answer[i+1] = answer[i+1] + (( answer[i] - answer[i]%10 ) / 10 );
		answer[i] = answer[i]%10;
	}

	// show the array

	cout << "\nThe Answer from the C++ Program:";
	cnt1 = 0;
	cout << "\nAnswer Array => ";
	for ( int i=59; i>=0; i-- ) {
		if ( answer[i] != 0 ) leadZero = false;
		if ( !leadZero ) {
			if ( cnt1<10 ) cout << answer[i];
			cnt1++;
		}
	}

	makeLine();

} // end of main


// ---------------------------------------------------------------------
void makeLine() {
	cout << "\n\n-----------------------------------------------------------------------------------------------\n\n";
} 
// ---------------------------------------------------------------------
int conChar(char a) {


	if ( int(a) == 48 ) return 0;
	if ( int(a) == 49 ) return 1;
	if ( int(a) == 50 ) return 2;
	if ( int(a) == 51 ) return 3;
	if ( int(a) == 52 ) return 4;
	if ( int(a) == 53 ) return 5;
	if ( int(a) == 54 ) return 6;
	if ( int(a) == 55 ) return 7;
	if ( int(a) == 56 ) return 8;
	if ( int(a) == 57 ) return 9;
	
	return -1;
} 
// ---------------------------------------------------------------------
