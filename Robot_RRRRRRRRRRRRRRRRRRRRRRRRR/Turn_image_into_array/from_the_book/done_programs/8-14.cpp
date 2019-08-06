// This program demonstrates that an array element 
// can be passed to a function like any other varaible.
#include <iostream>
using namespace std;

// ---------------------------------------------------------------------------

// Function prototype
void showValue(int);

// ---------------------------------------------------------------------------

int main() {

    const int array_size = 8;
    int collection[array_size] = { 5, 10, 15, 20, 25, 30, 35, 40 };

    for (int index = 0; index < array_size; index++)
        showValue(collection[index]);
    cout << endl;

    return 0;

}  // end of main

// ---------------------------------------------------------------------------

void showValue(int num) {

    cout << num << " ";

}

// ---------------------------------------------------------------------------

