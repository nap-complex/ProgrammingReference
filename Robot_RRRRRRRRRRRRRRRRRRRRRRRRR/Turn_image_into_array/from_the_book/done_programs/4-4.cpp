#include <iostream>
using namespace std;

int main(){

	double num1, num2, quotient;

	cout << "enter two numbers: ";
	cin >> num1 >> num2;

	if (num2 !=0) 
	{
		quotient = num1 / num2;
		cout << "The quotient of " << num1 << " divided by " 
			<< num2 << " is " << quotient << ".\n";
	} 
	else
	{
		cout << "Division  by zero is not possible.\n";
		cout << "Please run the progtram again and enter a number other than zero.\n";
	}

	return 0;

}



