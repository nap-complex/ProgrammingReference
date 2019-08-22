// This program demonstrates the deficiencies of
// the default copy constructor.

#include <iostream>
#include <iomanip>
#include "11-7_NumberArray.h"
using namespace std;

int main() {


    cout << "\n*******************************************************\n";

    // Create an object
    NumberArray first(3, 10.5);

    // Make a copy of the object
    NumberArray second = first;

    // Display the values of the two objects
    cout << setprecision(2) << fixed << showpoint;
    cout << "\nValue stored in first object is ";
    first.print();
    cout << "\nValue stored in second object is ";
    second.print();
    cout << endl << "Only the value in second object " 
         << "will be changed." << endl;

    // Now chang ethe value stored in the second object
    second.setValue(20.5);

    cout << "\nValue stored in first object is ";
    first.print();
    cout << "\nValue stored in second object is ";
    second.print();

    cout << "\n*******************************************************\n";

    return 0;

}






