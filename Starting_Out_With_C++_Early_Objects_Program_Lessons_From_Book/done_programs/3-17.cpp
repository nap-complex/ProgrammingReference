#include <iostream>
#include <iomanip>
using namespace std;

int main(){

	double number1 = 132.364, number2 = 26.91;
	double quotient = number1 / number2;
	int x = 5; // just for checking:


	cout << quotient << endl;
	cout << setprecision(5) << quotient << endl;
	cout << setprecision(4) << quotient << endl;
	cout << setprecision(3) << quotient << endl;
	cout << setprecision(2) << quotient << endl;
	cout << setprecision(1) << quotient << endl;

	// just for checking:
	for (x=20; x>0; x--) {
		cout << setprecision(x) << quotient << endl;
	}

	return 0;

}


