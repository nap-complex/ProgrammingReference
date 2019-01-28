/*
May 3, 2017 ish

this program is practice at inputing variables 
on the command line after the call to the program.
... looks like variables get input as strings and we
need to make them into what ever we need
*/




#include <iostream>
#include <string>  // do I need this to use char ** argv?

using namespace std;


// prototypes:
int loadIt ( int * p, char ** argv );

// global constants:
const int arraySize = 100;

// -------------------------------------------------------------------

int main( int argc, char ** argv ) 
{

	int * p;
	p = new int[arraySize];

	cout << "\n****************************************\n";


	cout << "\nDo we have a program?";
	cout << "\nis argv[0] something? => " << argv[0];
	if ( argv[1] != 0 ) 
		{
		cout << "\nis argv[1] something? => " << argv[1];
		} else
			{
				cout << "\nsomething equalled zero!";
			}

	cout << "\nDid we get through that?\n";	

	loadIt(p, argv);



	cout << "\n****************************************\n";

} // end of main


// -------------------------------------------------------------------

int loadIt ( int * p, char ** argv )
{
	int i;
	string a;
	string b;

	a = "something";
	b = "nothing";
	
	cout << "\na => " << a;
	cout << "\nb => " << b;
	a = b;
	cout << "\na => " << a;
	cout << "\nb => " << b;

	cout << "\nNow in loadIt function\n";
	cout << argv[1];
	for ( i=1; i<4; i++ ) 
	{
		a = char(argv[1]);		
		cout << "\nthis is a for loop " << i;
		
	}


	cout << "\na => " << a;
	cout << "\nb => " << b;
	cout << "\nNow leaving loadIt function\n";
	return 0;
} // end of loadIt
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
