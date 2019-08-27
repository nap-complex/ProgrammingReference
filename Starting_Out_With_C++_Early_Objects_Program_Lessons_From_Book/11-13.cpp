// This program demonstreates a class that behaves 
// like an array.
#include <iostream>
#include "11-13_intarray.h"
using namespace std;

int main() {

    IntArray table(10);

    // Store values in the array
    for (int x = 0; x < table.size(); x++)
        table[x] = ( x * 2 );

    // Display the values in the array
    for (int x = 0; x < table.size(); x++)
        cout << table[x] << " ";
    cout << endl;

    // Use the built-in + operator on array elements
    for (int x = 0; x < table.size(); x++)
        table[x] = table[x] + 5;

    // Display the values in the array
    for (int x = 0; x < table.size(); x++)
        cout << table[x] << " ";
    cout << endl;

    // Use the built-in ++ operator on array elements
    for (int x = 0; x < table.size(); x++)
        table[x]++;

    // Display the values in the array
    for (int x = 0; x < table.size(); x++)
        cout << table[x] << " ";
    cout << endl;

    cout << endl;

    return 0;

}
