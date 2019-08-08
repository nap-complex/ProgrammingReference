// This program stores employee wok hours in an int array.
#include <iostream>
using namespace std;

int main() {

    const int num_employees = 6;
    int hours[num_employees];   // Holds hours worked for 6 employees

    // Input the hours worked by each employee
    cout << "Enter the hours worked by " << num_employees
        << " employees: ";
    cin >> hours[0];
    cin >> hours[1];
    cin >> hours[2];
    cin >> hours[3];
    cin >> hours[4];
    cin >> hours[5];

    // display the contents of the array
    cout << "The hours you entered are: ";
    cout << " " << hours[0];
    cout << " " << hours[1];
    cout << " " << hours[2];
    cout << " " << hours[3];
    cout << " " << hours[4];
    cout << " " << hours[5] << endl;

    return 0;

}


