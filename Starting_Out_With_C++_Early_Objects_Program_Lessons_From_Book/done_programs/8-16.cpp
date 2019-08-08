// This program demonstrates passing different arrays to a function.
#include <iostream>
using namespace std;

// -------------------------------------------------------------------------

// Declare arrayType to be an alias for an array of ints
typedef int arrayType[];

// -------------------------------------------------------------------------

// Function prototypes
void showValues(arrayType, int);

// -------------------------------------------------------------------------

int main() {

    const int size1 = 8;
    const int size2 = 5;
    int set1[] = { 5, 10, 15, 20, 25, 30, 35, 40 };
    int set2[] = { 2, 4, 6, 8, 10 };

    cout << "Here are the values stored in array set1: ";
    showValues(set1, size1);

    cout << "Here are the values stored in array set2: ";
    showValues(set2, size2);

    return 0;

}

// -------------------------------------------------------------------------

void showValues( arrayType nums, int size ) {

    for (int index = 0; index < size; index++)
        cout << nums[index] << " ";
    cout << endl;

}

// -------------------------------------------------------------------------

