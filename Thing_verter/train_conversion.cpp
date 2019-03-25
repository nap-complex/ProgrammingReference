#include <iostream>
#include <stdlib.h>
#include <string>
using namespace std;


// prototypes:
void showInput( int argc, char* argv[] );

int main( int argc, char* argv[]) {

	double meters_number = 1;
	double feet_number;
	double n_number = 0;
	double ho_number = 0;
	int i;
	string s1;
	string s2;



	cout << "\n\n************************************************************************\n\n";

	showInput( argc, argv );	
	
	if ( argc == 1 ) cout << "\nNot enough arguments. :-)";

	if ( argc > 1 ) {

		s2 = argv[1];
		if ( s2 == "-v" )
		{
			cout << "\nThis is a converter program, version x";
		}
		else 
		{
			feet_number = atof(argv[1]);
			ho_number = feet_number / 87;
			n_number = feet_number / 160;
		
			cout << "\nThis many real feet  => " << feet_number;

			if ( ho_number >= 1 ) { 
				cout << "\nWould be this size in HO Scale => " << ho_number << " feet";
			} else {
				ho_number = ( ho_number * 12 );
				cout << "\nWould be this size in HO Scale => " << ho_number << " inches";
			}

			cout << "\nIs this many N feet => " << n_number;

		}


		} else {
			cout << "\nI was expecting more from you.\n";
		}

		
	cout << "\n\n************************************************************************\n\n";
}

// --------------------------------------------------------------------------------------------------

void showInput( int num1, char* array1[] ) 
{
	int i;
	bool shouldWeShowIt = false;
	string s1 = "-s";

	for ( i = 0; i < num1; i++ ) 
	{
		if ( array1[i] == s1 ) 
		{
			shouldWeShowIt = true;
			cout << "\nsomething was -s";
		} 
	}

	// ******************
//	shouldWeShowIt = true;

	if ( shouldWeShowIt ) 
	{
		for ( i = 0; i < num1; i++ ) 
		{
			cout << "\narray1[" << i << "] => {" << array1[i] << "}";
		}
	}

} // end of showInput

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
