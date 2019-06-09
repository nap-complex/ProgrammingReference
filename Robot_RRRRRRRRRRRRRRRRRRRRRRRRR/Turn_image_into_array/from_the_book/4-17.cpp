#include <iostream>
using namespace std;

int main(){

	const double min_income = 35000.0;
	const int min_years = 5;

	cout << "What is your annual income? ";

	double income; 
	cin >> income;

	if (income >= min_income)
	{
		cout << "How many years have you worked at your current job? ";

		int years;
		cin >> years;

		if (years > min_years)
			cout << "\nYou qualify.\n";
		else
			cout << "min_years << years to qualify.\n";
	}
	else
	{
		cout << "\nYou must earn at least $" << min_income
			<< " to qualify.\n";
	}

	return 0;
}


