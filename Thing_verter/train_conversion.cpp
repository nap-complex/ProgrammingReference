#include <iostream>
#include <stdlib.h>
using namespace std;



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
			cout << "\nIs this many ho feet => " << ho_number;
			cout << "\nIs this many n feet => " << n_number;

		}




		}
		
	cout << "\n\n************************************************************************\n\n";
} 
