/*
   This program uses the header file 8-28_Cirlce.h, so fetch that if 
   you are planing to take this 8-29.cpp anywhere.
*/
// This program demonstrates how an over loaded constructor 
// that accepts an argument can be invokde for multiple objects
// when an array of objects is created.
#include <iostream>
#include <iomanip>
#include "8-28_Circle.h"
using namespace std;

const int num_circles = 4;

int main() {

    // Define an array of 4 Circle objects.  Use an initialization list
    // to call the 1-argument constructor for the first 3 objects.
    // The default constructor will be called for the final object.
    Circle circle[num_circles] = { 0.0, 2.0, 2.5 };

    // Display the area of each object 
    cout << fixed << showpoint << setprecision(2);
    cout << "\nHere are the areas of the " << num_circles << " circles.\n";

    for (int index = 0; index < num_circles; index++)
    {
        cout << "circle " << (index+1) << setw(8) 
            << circle[index].findArea() << endl;
    }

    return 0;

}

