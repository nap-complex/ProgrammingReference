// This program shows how to pass an entire array to a function.
#include <iostream>
using namespace std;

// Function prototypes
void showValues(int intArray[], int size);

int main() {

    const int array_size = 8;
    int collection[array_size] = { 5, 10, 15, 20, 25, 30, 35, 40 };

    cout << "The array contains the values\n";
    showValues(collection, array_size);

    return 0;

} // end of main

// ---------------------------------------------------------------------

void showValues( int nums[], int size ) {

    for (int index = 0; index < size; index++ )
        cout << nums[index] << " ";
    cout << endl;

}

 
