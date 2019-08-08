// This program uses a functioni to perform division.
// It illustrates the return statement.

#include <iostream>
using namespace std;

// Function prototype
void divide(double arg1, double arg2);

int main() {

    double num1, num2;

    cout << "Enter two numbers and I will divide the first\n";
    cout << "number by the second number: ";
    cin >> num1 >> num2;
    divide(num1, num2);

    return 0;

} 

// -----------------------------------------------------------------

void divide(double arg1, double arg2)
{
    if (arg2 == 0.0)
    {
    cout << "Sorry, I cannot divide by zero.\n";
    return;
    }
    cout << "The quotient is " << ( arg1 / arg2) << endl;
}

