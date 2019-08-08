#include <iostream>
#include <cctype>
using namespace std;

int main(){

	cout << "Is '?' an aplhabetic character?  " << isalpha('?') << "\n";
	cout << "Is 'X' an aplhabetic character?  " << isalpha('X') << "\n";
	cout << "Is 'x' an aplhabetic character?  " << isalpha('x') << "\n\n";

	cout << "Ask if(isalpha('x') == true) \n";

	if (isalpha('x') == true)
		cout << "The letter x IS an alphabetic character. \n\n";
	else
		cout << "The letter x is NOT an alphabetic character. \n\n";

	cout << "Ask if(isalpha('x')) \n";

	if (isalpha('x'))
		cout << "The letter x IS an alphabetic character. \n\n";
	else
		cout << "The letter x is NOT an alphabetic character. \n\n";


	return 0;

} // end of main

