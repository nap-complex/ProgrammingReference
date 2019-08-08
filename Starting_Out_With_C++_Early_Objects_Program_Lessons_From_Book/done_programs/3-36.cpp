#include <iostream>
#include <iomanip>
using namespace std;

const double Price_Per_Cubic_YD = 22.00;

int main(){

	double	squareFeet;
	int		depth;
	double	cubicFeet, 
			cubicYards,
			totalPrice;

	cout << "Number of square feet to be covered with mulch: ";
	cin >> squareFeet;
	cout << "NUmber of inces deep: ";
	cin >> depth;

	cubicFeet = squareFeet * ( depth / 12.0 );
	cubicYards = cubicFeet / 27;
	totalPrice = cubicYards * Price_Per_Cubic_YD;

	cout << "\n Number of cubic yards needed: " << cubicYards << endl;
	cout << fixed << showpoint << setprecision(2);
	cout << "Price per cubic yard: $" << setw(7) 
		<< Price_Per_Cubic_YD << endl;
	cout << "Total price:          $" << setw(7)
		<< totalPrice << endl << endl;

	return 0;

} 

