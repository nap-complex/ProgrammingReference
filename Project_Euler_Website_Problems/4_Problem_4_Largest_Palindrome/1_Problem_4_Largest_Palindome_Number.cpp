#include <iostream>
#include <string>
using namespace std;

/*
Largest palindrome product

Problem 4 

A palindromic number reads the same both ways. The largest palindrome made from 
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// ---------------------------------------------------------------------------------------------

// prototypes:

bool isItAPalindrome(int);


// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

int main() {

	int temp1;
	int biggest = 0;

	cout << "\n\n***********************************************************************************\n\n";
	
	for ( int x=999; x>900; x-- ) 
		for ( int y=999; y>900; y-- )
		{
		temp1 = x * y;
		if ( isItAPalindrome(temp1) ) {
				if ( temp1 > biggest ) { biggest = temp1; }
				}
		} // end of for for

	cout << "\nThe biggest thing was => " << biggest;

	cout << "\n\n***********************************************************************************\n\n";

} // end of main

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------


bool isItAPalindrome(int num) {

	string s1;
	int st_left = 0;
	int st_right = 0;
	int i;

	s1 =  to_string(num);	
	st_left = 0;
	st_right = s1.length() - 1;

	while ( st_left < st_right ) {
		if ( s1[st_left] != s1[st_right] ) { return false; }
		st_left++;
		st_right--; 
	}

	return true;
} // end of isItAPalindrome

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------




