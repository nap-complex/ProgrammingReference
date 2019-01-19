// This is a sample program that shows how to do random number
// in the range from 0 to 9, which is probabaly what you are looking
// for most of the time anyway
// JLF 20160106

#include <iostream>
#include <cstdlib> // needed for random, I think
#include <ctime> // needed for random number seed, I think
using namespace std;


int main() {

	int i;


	cout << "\n\n\n---------------------------------------------\n\n";

	cout << "\nHere are some random numbers:\n\n";

	srand(time(NULL));  // this needs to be before and outside of the loop

	for (i=1; i<101; i++) {
		cout << rand()%10 << "  "; // this does the random number making
		if ( i%20 == 0 ) cout << endl;
	}// end of for

	
	cout << "\n\n\n---------------------------------------------\n\n";

	return 0;
} // end of main
