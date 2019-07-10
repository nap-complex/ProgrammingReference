// This program demonstrates the use of default function arguments.
#include <iostream>
using namespace std;

// Function prototype with default arguments
void displayStars(int starsPerRow = 10, int numRows = 1);

int main() {

    displayStars();            // startsPerRow & numRows use defaults ( 10 & 1 )
    cout << endl;
    displayStars(5);           // startsPerRow 5. & numRows use defaults 
    cout << endl;
    displayStars(7, 3);        // startsPerRow 7. & numRows 3. No defaults used. 
    cout << endl;


}  // end of main

// ----------------------------------------------------------------------------------

/*
   This function displays a rectangle made of asterisks.  If arguments are not passed
   to it, it uses the default arguments 10 for starsPerRow and 1 for numRows.
*/

void displayStars(int starsPerRow, int numRows) {

    // Nested loop.  The outer loop controls the rows 
    // and the inner loop controls the number of stars per row.
    for (int row = 1; row <= numRows; row++)
    {
        for (int star = 1; star <= starsPerRow; star++)
            cout << '*';
        cout << endl;
    }

} // end of displayStars
