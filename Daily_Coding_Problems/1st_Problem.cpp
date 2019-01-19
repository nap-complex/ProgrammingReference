#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

/*
   Good morning! Here's your coding interview problem for today.

   This problem was recently asked by Google.

   Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

   For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/
// prototypes:
int makeAnumber();

//-----------------------------------------------------------------------------------------------------------------------


int main() {

	const int size = 30;
	int k;
	int nums[size];

	cout << "\n\n******************************************************************************************\n\n";


	srand(time(NULL));

	k = makeAnumber();
	
	cout << "\nk => " << k << "\n";

	for ( int i=0; i<size; i++ ) nums[i] =  makeAnumber();
	for ( int i=0; i<size; i++ ) cout << "." << nums[i];

	for ( int x=0; x<size; x++ )
		for ( int y=0; y<size; y++ )
			if ( x != y ) 
				if ( nums[x] + nums[y] == k ) { 
					cout << "\nx = " << nums[x] << "  y = " << nums[y];
					cout << "\nIt is true that there was a match!";
					}				

		
	cout << "\n\n******************************************************************************************\n\n";

} // end of main


//-----------------------------------------------------------------------------------------------------------------------
int makeAnumber(){


	return rand()%100;

} // end of makeAnumber
//-----------------------------------------------------------------------------------------------------------------------









