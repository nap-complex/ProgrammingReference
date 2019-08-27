/*
   Aug 15, 2019  -  JLF

   This program uses the 11-13 support files

*/
// This program demonstrates the bounds-checking
// capabilities of the IntArray class.
#include <iostream>
#include "11-13_intarray.h"
using namespace std;

int main() {

    IntArray table(10);

    // Store values in the array
    for (int x = 0; x < table.size(); x++)
        table[x] = ( x );

    // Display the values in the array
    for (int x = 0; x < table.size(); x++)
        cout << table[x] << " ";
    cout << endl;

    cout << "Attempting to store outside the array bounds:\n";
    table[table.size()] = 0;

    return 0;

}
