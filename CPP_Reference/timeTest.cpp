// This program is time practice.  We are trying to write a function that we can use to track
// time in our programs in a way that we can understand easily.  So we will write the 
// conversions our selves.
// Dec 6, 2017 - JLF

#include <iostream>
#include <ctime>
using namespace std;


int main() {

	time_t t1;
	const int secInYear = ( 60 * 60 * 24 * 365 );
	int sec;

	cout << "\n*****************************\n";

	cout << "\nSeconds in a year = " << secInYear << endl;

	t1 = time(NULL);

	cout << "\nTime thing => ";
	cout << t1;

	cout << "\nMaybe that is " << int(t1/secInYear) << " years?";
	cout << "\nSo, today might be " << ( 1970 + int(t1/secInYear) );

	sec = ( t1 % secInYear );

	cout << "\nSeconds left over => " << sec;
	cout << "\nWhich includes " << int(sec / ( 24 * 60 * 60 ) ) << " days";

	sec = ( sec % ( 24 * 60 * 60 ) );
	cout << "\nSeconds now left => " << sec;
	cout << "\nWhich includes " << int(sec / ( 60 * 60 )) << " hours";

	cout << "\n*****************************\n";


} // end of main
