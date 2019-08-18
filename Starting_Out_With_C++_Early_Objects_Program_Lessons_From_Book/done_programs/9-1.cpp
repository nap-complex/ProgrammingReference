// This program demonstrates the searchList function,
// which performs a linear search on an integere array.
#include <iostream>
using namespace std;

// ----------------------------------------------------------------

// Function prototype
int searchList(const int [], int, int);

// ----------------------------------------------------------------

const int size = 5;

// ----------------------------------------------------------------

int main() {

    int tests[size] = { 87, 75, 98, 100, 82 };
    int results;

    // Search the array for the value 100
    results = searchList(tests, size, 100);

    // If searchList returned -1, 100 was not found
    if (results == -1)
        cout << "You did not earn 100 points on any test.\n";
    else
    {
        // Otherwise results contains the subscript of 
        // the first 100 found in the array
        cout << "You earned 100 points on test ";
        cout << (results + 1) << ".\n";
    }

    return 0;

}  // end of main

// ----------------------------------------------------------------

int searchList(const int list[], int size, int value) {

    int index = 0;
    int position = -1;
    bool found = false;

    while (index < size && !found) 
    {
        if (list[index] == value )
        {
            found = true;
            position = index;
        }
        index++;
    }

    return position;

}

// ----------------------------------------------------------------

