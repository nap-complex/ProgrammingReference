#include <iostream>
#include <cmath>
using namespace std;

int main(){

	double d1 = 22.3333;
	int x = 4;

	int testNum1 = 0;
	int testNum2 = 0;
	double answer1;

	cout << "\n--------------------------------------------------------------\n";

	d1 = static_cast<double>(x);

	cout << "d1 => " << d1 << "\n";
	cout << "x  => " << x << "\n";

	cout << "testNum1 => " << testNum1 << endl;
	cout << "testNum2 => " << testNum2 << endl;

	testNum1 = 23;
	testNum2 = 7;

	cout << "testNum1 => " << testNum1 << endl;
	cout << "testNum2 => " << testNum2 << endl;


	cout << testNum2 << " % " << testNum1 << " => " << testNum2 % testNum1 << endl;
	cout << testNum1 << " % " << testNum2 << " => " << testNum1 % testNum2 << endl;

	cout << "\nwhat is this fmod() thing?\n";

	cout << "fmod(" << testNum2 << "," << testNum1 << ") => " << fmod(testNum2, testNum1) << endl;
	cout << "fmod(" << testNum1 << "," << testNum2 << ") => " << fmod(testNum1, testNum2) << endl;

	cout << "\n--------------------------------------------------------------\n";
	

	cout << "4-1.cpp\n";
	cout << "4-2.cpp\n";
	cout << "4-3.cpp\n";
	cout << "4-4.cpp\n";
	cout << "4-5.cpp\n";
	cout << "4-6.cpp\n";
	cout << "4-7.cpp\n";
	cout << "a.out\n";
	cout << "boiler_plate.cpp\n";
	cout << "done_programs\n";
	cout << "right_justify_test.cpp\n";
	cout << "test1.cpp\n";
	cout << "x00_13-1.cpp\n";
	cout << "x00_13-2.cpp\n";
	cout << "x00_13-3.cpp\n";
	cout << ":$r !pwd\n";
	cout << ":r !pwd\n";
	cout << "} // end of main\n";
	cout << "/media/jlf/2ndDiskPart1/Documents/Programming Master 20171203/\n";
	cout << "ProgrammingReference/Robot_RRRRRRRRRRRRRRRRRRRRRRRRR/Turn_image_into_array/from_the_book\n";
	cout << "\n--------------------------------------------------------------\n";
	
	return 0;

} // end of main
