// This program uses an array to store the hours worked by
// a set of employees who all make the same hourly wage.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    const int num_workers = 5;
    int hours[num_workers];
    double payRate;

    // Input hours worked by each employee
    cout << "Enter the hours worked by \n";
    for (int i = 0; i <num_workers; i++)
    {
        cout << "Employee #" << ( i+1 ) << ": ";
        cin >> hours[i];
    }

    // Input the hourly pay rate for all employees
    cout << "\nEnter the hourly pay rate for all the employees: ";
    cin >> payRate;

    // Display each employee's gross pay
    cout << "\nHere is the gross pay for each employee:\n";
    cout << fixed << showpoint << setprecision(2);
    
    for (int i = 0; i <num_workers; i++)
    {
        double grossPay = hours[i] * payRate;
        cout << "Employee #" << ( i + 1 );
        cout << ": $" << setw(7) << grossPay << endl;
    }

    return 0;

}



