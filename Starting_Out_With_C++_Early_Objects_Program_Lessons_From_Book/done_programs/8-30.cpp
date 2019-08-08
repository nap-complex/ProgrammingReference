// This program uses an array of structures to hold payroll data.
#include <iostream>
#include <iomanip>
using namespace std;



struct PayInfo
{
    int hours;
    double payRate;
};

int main() {

    const int num_employees = 3;

    int index;
    PayInfo workers[num_employees];
    double grossPay;

    // Get payroll data
    cout << "Enter the hours worked and hourly pay rates of "
        << num_employees << " employees.";

    for (index = 0; index < num_employees; index++)
    {
        cout << "\n Hours worked by employee #" << (index + 1);
        cout << ": ";
        cin >> workers[index].hours;
        cout << "Hourly pay rate for employee #";
        cout << (index + 1) << ": ";
        cin >> workers[index].payRate;
    }

    // Display each employee's gross pay
    cout << "\nHere is the gross pay for each employee:\n";
    cout << fixed << showpoint << setprecision(2);

    for (index = 0; index < num_employees; index++)
    {
        grossPay = workers[index].hours * workers[index].payRate;
        cout << "Employee #" << (index + 1);
        cout << ": $" << setw(7) << grossPay << endl;
    }

    return 0;

}


