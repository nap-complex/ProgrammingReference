#include <iostream>

// need this next part for time tracking:
#include <time.h>

using namespace std;


int main() {

int i;
double x;

// these are the variables for time and their type:
clock_t timeVar1, timeVar2;

cout << "\n\n------------------------------------------------------\n";

// this is how you put the time into a variable:
timeVar1 = clock();

// this is just here to kill time so the time testing does something:
for ( i=1; i<10000000; i++ ) {
		// do something
		x = x / i;
} // end of time killer

// this records time after time killer
timeVar2 = clock();

// this maths and shows elapsed time:
cout << "\nTime: " << (double)(timeVar2-timeVar1) / CLOCKS_PER_SEC;
cout << " seconds\n";



cout << "\n------------------------------------------------------\n";

return 0;
} // end of main
