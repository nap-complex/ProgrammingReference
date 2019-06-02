#include <iostream>
#include <cstdlib>
using namespace std;

int main(){

	unsigned seed;
	cout << "Enter a seed value: ";
	cin >> seed;

	srand(seed);

	cout << "\n---------------------------------------------------------------------\n";
	cout << rand() << endl;
	cout << rand() << endl;
	cout << rand() << endl;
	cout << "---------------------------------------------------------------------\n";


	return 0;

}

