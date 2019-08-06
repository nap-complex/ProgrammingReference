// This program uses a function to doubel the value of 
// each element of an array.
#include <iostream>
using namespace std;

// -------------------------------------------------------------------

// Declare arrayType to be an alias for an array of ints
typedef int arrayType[];

// -------------------------------------------------------------------

// function prototypes
void doubleArray(arrayType, int);
void showValues(arrayType, int);

// -------------------------------------------------------------------

int main() {

    const int array_size = 7;
    arrayType set = { 1, 2, 3, 4, 5, 6, 7 };

    // Display the original values
    cout << "The arrays values are:\n";
    showValues(set, array_size);

    // double the values in the array
    doubleArray(set, array_size);

    // Display the new values
    cout << "\nAfter calling doubleArray, the values are:\n";
    showValues(set, array_size);
    cout << endl;

    return 0;

}

// -------------------------------------------------------------------

void doubleArray(arrayType nums, int size) {

    for (int index = 0; index < size; index++)
        nums[index] *= 2;

}

// -------------------------------------------------------------------

void showValues(arrayType nums, int size) {

    for (int index = 0; index < size; index++)
        cout << nums[index] << " ";
    cout << endl;

}

// -------------------------------------------------------------------


