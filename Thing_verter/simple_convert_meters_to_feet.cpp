#include <iostream>
#include <stdlib.h>
using namespace std;



int main( int argc, char* argv[]) {

	double meters_number = 1;
	double feet_number;
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
			meters_number = atof(argv[1]);
			feet_number = ( meters_number * 39 / 12 );
		
			cout << "\nThis many meters  => " << meters_number;
			cout << "\nIs this many feet => " << feet_number;
		}




		}
		
	cout << "\n\n************************************************************************\n\n";
} 
