#include <iostream>
using namespace std;
/*
Jan 8, 2013  -  JLF

Smallest multiple

Problem 5 

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

int main() {

	long bigNum;
	long smallNum;
	bool allGood = false;
	long testNum = 1;
	
	cout << "\n------------------------------------------------------------------\n";

	bigNum = 2520;
	while ( bigNum < 1000000000 ) {
		allGood = true;
		for ( smallNum=1; smallNum<=20; smallNum++ ) {
			if ( bigNum%smallNum != 0 ) allGood = false;
		} // end of for
		if ( allGood ) {
			cout << "\nMight be this >> " << bigNum;
			break;
		}
		bigNum++;

	} // end of while


	cout << "\n------------------------------------------------------------------\n";

} // end of main
