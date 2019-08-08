// This program uses an array of objects.
// The objects are instances of the Circle class.
#include <iostream>
#include <iomanip>
#include "8-28_Circle.h"

using namespace std;

const int num_circles = 4;

int main() {

    Circle circle[num_circles];

    // Use a loop to initialize the radius of each object
    for (int index = 0; index < num_circles; index++)
    {
        double r;
        cout << "Enter the radius for circle " << (index + 1) << ": ";
        cin >> r;
        circle[index].setRadius(r);
    }

    // Use a loop to get and print out the area of each object
    cout << fixed << showpoint << setprecision(2);
    cout << "\nHere are the areas of the " << num_circles << " circles.\n";

    for (int index = 0; index < num_circles; index++)
    {
        cout << "circle " << (index+1) << setw(8) 
            << circle[index].findArea() << endl;
    }

    return 0;

}

