// This program demonstrates how to pass
// a two-dimensional array to a function.
#include <iostream>
#include <iomanip>
using namespace std;

// ---------------------------------------------------

const int numCols = 4;
const int tbl1rows = 3;
const int tbl2rows = 4;

// ---------------------------------------------------

// Function Prototype
void showArray( const int [][numCols], int);

// ---------------------------------------------------

int main() {

    int table1[tbl1rows][numCols] = 
    { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };

    int table2[tbl2rows][numCols] = 
    { 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160 };

    cout << "The contents of table1 are: \n";
    showArray(table1, tbl1rows);

    cout << "The contents of table2 are: \n";
    showArray(table2, tbl2rows);

    return 0;

} 
   
// ---------------------------------------------------

void showArray(int const array[][numCols], int numRows) {

    for (int row = 0; row < numRows; row++)
    {
        for (int col = 0; col < numCols; col++)
        {
            cout << setw(5) << array[row][col] << " ";
        }
        cout << endl;
    }

}

// ---------------------------------------------------

