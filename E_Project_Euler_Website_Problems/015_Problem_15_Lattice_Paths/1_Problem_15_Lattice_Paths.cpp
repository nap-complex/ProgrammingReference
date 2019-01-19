#include <iostream>
using namespace std;

/*
Jan 16, 2019  -  JLF
*******************************************************
THIS DOESNT WORK BECAUSE MAX_ULLONG ISNT ENOUGH TO DO IT
IF WE GET THE LONG MATH WORKING WE WILL TRY AGAIN
- see the python version, that worked
*******************************************************
Lattice paths
Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the 
right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
*/

// prototypes:
long long int factorialThatBitch(long long int);
long long int nChooseRthatBitch(long long int, long long int);

// ------------------------------------------------------------------------------------------------------------------------


int main() {

	long long int n = 40;
	long long int r = 20;

	cout << "\n\n****************************************************************************************\n\n";


	cout << "\nlattice paths answer => " << nChooseRthatBitch(n, r);


	cout << "\n\n****************************************************************************************\n\n";
		

}  // end of main


// ------------------------------------------------------------------------------------------------------------------------
long long int factorialThatBitch(long long int num1) {

	long long int holder = 1;

	for ( int i=1; i<num1+1; i++ ) {
		holder = holder * i;
		cout << "\nholder => " << holder;
	}

	return holder;


} // end of factorialThatBitch
// ------------------------------------------------------------------------------------------------------------------------
long long int nChooseRthatBitch(long long int num2, long long int r_thing) {

	return factorialThatBitch(num2) / ( factorialThatBitch(r_thing) * factorialThatBitch(num2-r_thing) );

} // end of nChooseRthatBitch
// ------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------
