// This program uses the strcpy function to copy one C-string to another.
#include <iostream>
// the books says that strcpy does not need a special '#include,' but this program
// did not compile in g++ until I added the '#include <cstring>' thing
#include <cstring>
using namespace std;

int main(){

	const int size = 12;
	char name1[size];
	char name2[size];

	strcpy(name1, "Sebastian");
	cout << "name1 now holds the string " << name1 << endl;

	strcpy(name2, name1); 
	cout << "name2 now also holds the string " << name2 << endl;

	return 0;

}


