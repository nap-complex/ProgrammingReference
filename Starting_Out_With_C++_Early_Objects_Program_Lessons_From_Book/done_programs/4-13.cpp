#include <iostream>
using namespace std;

int main(){

	const double min_income = 35000;
	const int min_years = 5;

	double income; 
	int years;

	cout << "What is your annual income? ";
	cin >> income;
	cout << "How many years have you worked at your current job? ";
	cin >> years;

	if ( income >= min_income || years > min_years ) 
		cout << "You qualify for a loan.\n";
	else 
	{
		cout << "\nYou must earn at least &" << min_income 
			<< " or have been employed \n"
			<< "for more than " << min_years << " years "
			<< "to qualify for a loan. \n";
	} 

	return 0;
}
