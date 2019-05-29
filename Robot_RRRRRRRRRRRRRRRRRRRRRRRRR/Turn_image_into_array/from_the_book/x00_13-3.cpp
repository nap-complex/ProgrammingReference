// this program demonstrates input and output of numbers
// using the octal, decimal, and hexadecimal number systems.

#include <iostream>
#include <iomanip>
using namespace std;

int main(){

	int a, b;

	// Read two decimals and rpint hex and octal equivalents
	cout << "Enter two decimal numbers:  ";
	cin >> a >> b;
	cout << "The numbers in decial:  " << a << '\t' << b << endl;
	cout << "The numbers in headecimal:  " << hex << showbase << a << '\t' << b << endl;
	cout << "The numbers in octal:  " << oct << a << '\t' << b << endl;

	// Read some hexadecimals and print their decimal equivaltents
	cout << "Enter two hexadecimal numbers:  ";
	cin >> hex >> a >> b;
	cout << "You entered decimal " << dec << a << '\t' << b << endl;

	// Read some octals and print their decimal equivaltents
	cout << "Enter two octals numbers:  ";
	cin >> oct >> a >> b;
	cout << "You entered decimal " << dec << a << '\t' << b << endl;

	return 0;	

} // end of main()
