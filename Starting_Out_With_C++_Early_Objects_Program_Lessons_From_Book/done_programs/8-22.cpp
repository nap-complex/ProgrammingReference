// This program stores employee hours worked and hourly pay rates
// in vectors.
#include <iostream>
#include <iomanip>
#include <vector>
using namespace std;

int main() {

    const int num_emps = 5;
    vector <int> hours(num_emps);
    vector <double> payRate(num_emps);
    double grossPay;
    int index;

    // Get employee work data
    cout << "Enter the hours worked and hourly pay rates of "
        << num_emps << " employees. \n";

    for (index = 0; index < num_emps; index++)
    {
        cout << "Hours worked by emplyee #" << ( index + 1 ) << ": ";
        cin >> hours[index];
        cout << "Hourly pay rate for employee #" << (index + 1 ) << ": ";
        cin >> payRate[index];
    }
    
    // Display each employee's gross pay
    cout << "\nHere is the gross pay for each employee:\n";
    cout << fixed << showpoint << setprecision(2);

    for (index = 0; index < num_emps; index++)
    {
        grossPay = hours[index] * payRate[index];
        cout << "Employee #" << (index + 1);
        cout << ": $" << setw(7) << grossPay << endl;
    }

    return 0;

}


