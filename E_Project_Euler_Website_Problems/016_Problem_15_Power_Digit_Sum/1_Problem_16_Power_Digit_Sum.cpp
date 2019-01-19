/*
Jan 17, 2019  -  JLF

Power digit sum
Problem 16

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
*/

// ------------------------------------------------------------------------------------------------------
#include <iostream>
using namespace std;

// ------------------------------------------------------------------------------------------------------
// prototypes:
void printArray(int array[], int size);
void carryOver(int array[], int size);
void timesTwo(int array[], int size);
int addEmUp(int thing[], int size);

// ------------------------------------------------------------------------------------------------------

int main() {

	cout << "\n\n*****************************************************************************";

	int bigList[1000] = {0};  // makes an array bigger than we need
	int size = 1000;          // in case we need a varaible of size

	bigList[0] = 2;           // seed the array to start at 2

	// for 999 more times multiply the array by 2 and clean it up each pass => 2^1000, the hard way
	for ( int i=0; i<999; i++ ) {	
		timesTwo(bigList, size);	
		carryOver(bigList, size);
	}

	// this was just for debugging:
	//	printArray(bigList, size);

	cout << "\nThe answer from the C++ program:";
	cout << "\nAdding those up leads to => " << addEmUp(bigList, size);


	cout << "\n*****************************************************************************\n\n";

} // end of main

// ------------------------------------------------------------------------------------------------------
void printArray(int thing[], int size){
	// this functions prints out the array for debuging

	bool leadZero = true;

	cout << "\nthe thing is => ";
	for ( int i=size-1; i>=0; i--)
	{
		if ( thing[i] != 0 ) leadZero = false;
		if ( !leadZero ) {
			cout << thing[i];	 	
		} 
	}

} // end of printArray
// ------------------------------------------------------------------------------------------------------
void carryOver(int thing[], int size){
	// this function carry's over any value higher than 9 into the next column ( array spot )
	for ( int i=0; i<1000; i++ ) {
		thing[i+1] = thing[i+1] + (( thing[i] - thing[i]%10 ) / 10 );
		thing[i] = thing[i]%10;
	}

} // end of carryOver
// ------------------------------------------------------------------------------------------------------
void timesTwo(int thing[], int size){
	// this function multiplys the array by 2 ( 2^2^2... etc )
	
	for ( int i=0; i<1000; i++ ) {
		thing[i] = thing[i]*2;
	}

}  // end of timesTwo
// ------------------------------------------------------------------------------------------------------
int addEmUp(int thing[], int size) {
	// this function adds up the digits in the final array ( which is what the question asked for )
	
	int cnt1 = 0;

	for ( int i=0; i<size; i++ ) cnt1 = cnt1 + thing[i];

	return cnt1;

} // end of addEmUp
// ------------------------------------------------------------------------------------------------------

















