#include <iostream>
#include <stdlib.h>
using namespace std;


// prototypes:
void showInput();

int main( int argc, char* argv[]) {

	double meters_number = 1;
	double feet_number;
	double n_number = 0;
	double ho_number = 0;
	int i;
	string s1;



	cout << "\n\n************************************************************************\n\n";

	cout << "\nargc => " << argc;
	

	if ( argc > 1 ) {


		if ( argv[1] == "-v" )
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
void showInput();

// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------
