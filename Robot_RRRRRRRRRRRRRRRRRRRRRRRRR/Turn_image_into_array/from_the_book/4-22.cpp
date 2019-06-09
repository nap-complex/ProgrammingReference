#include <iostream>
#include <iomanip>
using namespace std;

int main(){

	const double pay_rate = 50.0;
	const int min_hours = 5;
	double hours,
		   charges;

	cout << "How may hours were worked? ";
	cin >> hours;

	hours = hours < min_hours ? min_hours : hours;

	charges = pay_rate * hours;
	cout << fixed << showpoint << setprecision(2)
		<< "The charges are $" << charges << endl;

	return 0;

}

