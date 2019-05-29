#include <iostream>
using namespace std;

int main() {

	int books,
		months;
	double booksPerMonth;

	cout << "How many books do you plan to read? ";
	cin >> books;
	cout << "How many months will it take you to read them? ";
	cin >> months;

	booksPerMonth = static_cast<double>(books) / months;
	cout << "That is " << booksPerMonth << " books per month.\n";

	return 0;
}
