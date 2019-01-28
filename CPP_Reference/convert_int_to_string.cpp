// this is a sample program that shows a way
// to convert an integer to an array ( we hope )
// 20151215

#include <iostream>

#include <sstream> // needed as library that lets string conversion happen

using namespace std;


int main() {

	string s1 = "testString";
	ostringstream convertString; // needed as type of string to read in to
	int i = 20;
	string stringNum;  // string that will contain conversion
	


	cout << "\n----------------------------------------------------------------\n";


	cout << "\nThis is a program\n";
	cout << "\ntestString was: " << s1 << endl;
	cout << "\ntestInteger was: " << i << endl;

	// these next two lines do the magic: int i becomes string stringNum
	convertString << i;
	stringNum = convertString.str();

	s1 += stringNum;

	cout << "\ntestString is now: " << s1 << endl;

	cout << "\n----------------------------------------------------------------\n";

	return 0;
} // end of main
