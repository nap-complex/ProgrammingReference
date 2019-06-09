#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main(){

	const double price_a = 249.0,
		  price_b = 299.0;

	string partNum;

	cout << "The stereo part numbers are:\n";
	cout << "Boom box	: part number S-29A \n";
	cout << "Shelf Model: part number S-29B \n";
	cout << "Enter the part number of the stero you\n";
	cout << "wish to purchase: ";
	cin >> partNum;

	cout << fixed << showpoint << setprecision(2);

	if (partNum == "S-29A")
		cout << "The price is $" << price_a << endl;
	else if (partNum == "S-29B")
		cout << "The price is $" << price_b << endl;
	else 
		cout << partNum << " is not a valid part number.\n";

	return 0;

} 

