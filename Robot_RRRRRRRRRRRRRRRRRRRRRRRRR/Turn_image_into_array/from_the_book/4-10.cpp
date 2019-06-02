#include <iostream>
#include <iomanip>
using namespace std;

int main(){

	const double adult_rate = 120.0;
	const double child_rate = 60.0;
	const double senior_rate = 100.0;

	int choice;
	int months;
	double charges;

	cout << "   Health Club Membership Menu\n\n";
	cout << "1. Standard Adult Membership\n";
	cout << "2. Child Membership\n";
	cout << "3. Senior Citizen Membership\n";
	cout << "4. Quit the program\n\n";
	cout << "Enter your choice: ";
	cin >> choice;

	cout << fixed << showpoint << setprecision(2);

	if (choice == 1) {
		cout << "For how many months? ";
		cin >> months;
		charges = months * adult_rate;
		cout << "\nThe total charges are $" << charges << endl;
	}
	else if (choice == 2) {
		cout << "For how many months? ";
		cin >> months;
		charges = months * child_rate;
		cout << "\nThe total charges are $" << charges << endl;
	}
	else if (choice == 3) {
		cout << "For how many months? ";
		cin >> months;
		charges = months * senior_rate;
		cout << "\nThe total charges are $" << charges << endl;
	}
	else if (choice == 4) {
		cout << "\nThe valid choices are 1 through 4.\n"
			<< "Run the program again and select one of those.\n";
	}

	return 0;

}

