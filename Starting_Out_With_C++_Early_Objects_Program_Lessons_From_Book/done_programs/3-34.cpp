// random function rand srand time()
// This program demonstrates using the c++ time function
// to rpovide a "seed" for the random number generator

#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main(){

	unsigned seed;				// random generator seed

	// Use the time function to get a "seed" value for srand
	seed = time(0);
	srand(seed);

	// now generate and print three random numbers
	cout << rand() << endl;
	cout << rand() << endl;
	cout << rand() << endl;
	cout << rand() << endl;

	return 0;

}

