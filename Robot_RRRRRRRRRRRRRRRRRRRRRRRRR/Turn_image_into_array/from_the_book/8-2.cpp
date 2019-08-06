// This program stores employee work hours in an int array.  It uses
// one loop to input the hours and another loop to display them.
#include <iostream>
using namespace std;

int main() {

    const int num_employees = 6;
    int hours[num_employees];
    int count;

    // Input the hours worked by each employee
    cout << "Enter the hours worked by " << num_employees
        << " employees: ";

    for ( count = 0; count < num_employees; count++ )
        cin >> hours[count];

    // Display the contents of the array
    cout << "The hours you entered are:";

    for ( count = 0; count < num_employees; count++ )
        cout << " " << hours[count];

    cout << endl;

    return 0;

}






