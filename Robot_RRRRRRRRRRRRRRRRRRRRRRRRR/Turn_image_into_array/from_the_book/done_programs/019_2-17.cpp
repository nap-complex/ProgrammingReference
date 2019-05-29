// This program displays the size of various data types.
#include <iostream>
using namespace std;

int main() {

	long double apple;

	cout << "the size of an integer is " << sizeof(int);
	cout << " bytes.\n";

	cout << "the size of an long integer is " << sizeof(long);
	cout << " bytes.\n";

	cout << "An apple can be eaten in " << sizeof(apple);
	cout << " bytes.\n";

	return 0;

}  
