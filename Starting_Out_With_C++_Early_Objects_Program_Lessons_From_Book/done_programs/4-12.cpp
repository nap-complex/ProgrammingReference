#include <iostream>
using namespace std;

int main() {

	char employed, 
		 recentGrad;

	cout << "Answer the following questions\n";
	cout << "with either Y for Yes or N for No.\n";
	cout << "Are you employed? ";
	cin >> employed;
	cout << "Have you graduated from college in the past two years? ";
	cin >> recentGrad;

	if (employed == 'Y' && recentGrad == 'Y')
		{
			cout << "You qualify for the special interest rate.\n";
		}
		else
		{
			cout << "You must be employed and have graduated from college in the past\n";
			cout << "two years to qualify for the special interest rate.\n";
		}

	return 0;

} 
