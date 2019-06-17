// This program demonstrates how a switch statement
// works if there are no break statements.
#include <iostream>
using namespace std;

int main(){

	char choice;

	cout << "Enter A, B, or C: ";
	cin >> choice;

	switch (choice)
	{
		case 'A':cout << "You entered A.\n";
		case 'B':cout << "You entered B.\n";
		case 'C':cout << "You entered C.\n";
		default: cout << "You did not enter A, B, or C!\n";
	}

	return 0;

}



