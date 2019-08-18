/*
    Aug 17, 2019  -  JLF

    This program demonstrates a pointer to const parameter
*/
#include <iostream>
using namespace std;

// ----------------------------------------------------------

void displayValues(const int *numbers, int size);

// ----------------------------------------------------------

int main() {

    // Array sizes
    const int size = 6;

    // Define an array of const ints
    const int array1[size] = { 1, 2, 3, 4, 5, 6 };

    // Define an array of non-const ints
    const int array2[size] = { 2, 4, 6, 8, 10, 12 };

    // Display the contents of the const array
    displayValues(array1, size);

    // Display the contents of the non-const array
    displayValues(array2, size);

    return 0;

}

// ----------------------------------------------------------

void displayValues(const int *numbers, int size) {

    // Display all the values 
    for (int count = 0; count < size; count++) 
    {
        cout << *(numbers + count) << " ";
    }

    cout << endl;

}

// ----------------------------------------------------------






