// This program demonstrates overloading 
// of the assignment operator
#include <iostream>
#include <iomanip>
#include "11-9_overload.h"
using namespace std;

int main() {

    NumberArray first(3, 10.5);
    NumberArray second(5, 20.5);

    // Display the values of the two objects
    cout << setprecision(2) << fixed << showpoint;
    cout << "First objects data is ";
    first.print();
    cout << endl << "Second objects data is ";
    second.print();

    // Call the overloaded operator
    cout << "\nNow we will assign the second object "
         << "to the first." << endl;
    first = second;

    // Display the new values of the two objects
    cout << "First objects data is ";
    first.print();
    cout << endl << "Second objects data is ";
    second.print();

    return 0;

}








