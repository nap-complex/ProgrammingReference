// This program demonstrates the use of copy constructors
#include <iostream>
#include <iomanip>
#include "11-8_NumberArray.h"
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

    // Now change the value stored in the second object
    second.setValue(20.5);

    cout << "\nValue stored in first object is ";
    first.print();
    cout << "\nValue stored in second object is ";
    second.print();

    cout << "\n*******************************************************\n";

    return 0;

}






