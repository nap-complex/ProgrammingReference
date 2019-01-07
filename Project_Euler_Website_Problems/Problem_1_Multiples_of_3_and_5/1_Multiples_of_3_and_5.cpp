/*
	Jan 6, 2019 - JLF

	Project Euler Problem 1, Multiples of 3 and 5

	If we list all the natural numbers below 10 that are multiples 
	of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
	Find the sum of all the multiples of 3 or 5 below 1000. 

	The website says we have the correct answer. Jan 6, 2019: 6:23pm EST
*/

#include <iostream>
using namespace std;

int main() {

	int sumOfNumbers = 0;	
	int i = 0;

	cout << "-------------------------------------------------------------------\n";

	/*
	for (i=1; i<10; i++) {
		if ( (i%3==0) || (i%5==0) ) {
			sumOfNumbers = sumOfNumbers + i;
		} // end of if statment
	} // end of for loop

	cout << "The sum of all natural numbers between 0 and 10 is  => " << sumOfNumbers << endl;
	*/

	i = 0;

	for (i=1; i<1000; i++) {
		if ( (i%3==0) || (i%5==0) ) {
			sumOfNumbers = sumOfNumbers + i;
//			cout << "sumOfNumbers => " << sumOfNumbers << "  i = " << i << endl;
		} // end of if statment
	} // end of for loop
	
	cout << "From the C++ Program: " << endl;
	cout << "The sum of all multiples of 3 and 5 from 0 to 1000 is  => " << sumOfNumbers << "\n";

	cout << "-------------------------------------------------------------------\n";

} // end of main
