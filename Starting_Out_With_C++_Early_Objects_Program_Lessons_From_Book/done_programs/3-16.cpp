#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main(){

	int intValue = 3928;
	double doubleValue = 91.5;
	string stringValue = "Jill Q. Jones";

	cout << "(" << setw(5)  << intValue << ")" << endl;
	cout << "(" << setw(8)  << doubleValue << ")" << endl;
	cout << "(" << setw(16)  << stringValue << ")" << endl;

	return 0;

}
