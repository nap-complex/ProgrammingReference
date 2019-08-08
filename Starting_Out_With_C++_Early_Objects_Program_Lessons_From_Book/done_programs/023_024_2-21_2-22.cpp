#include <iostream>
using namespace std;

/*
   the part is for Program 2-22
   which was only about making 
   multi-line comments.
   So here's one
*/

int main() {

	int totalSeconds = 125,
		minutes,
		seconds;

	minutes = totalSeconds / 60;

	seconds = totalSeconds % 60;

	cout << totalSeconds << " seconds is equivalent to ";
	cout << minutes << " minutes and " << seconds << " seconds. \n";

	return 0;
}
