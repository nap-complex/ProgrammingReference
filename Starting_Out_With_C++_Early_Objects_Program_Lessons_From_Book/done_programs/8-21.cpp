// this program stores and displays theater seat prices.
// It demonstrates how to pass a 3-dimensional array to a function.
// The data is read in from a file.
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

// ----------------------------------------------------------------------

const int
    num_sections = 3,
    rows_in_section = 5,
    seats_in_row = 8;

// ----------------------------------------------------------------------

typedef double seatTable[][rows_in_section][seats_in_row];

// ----------------------------------------------------------------------

// Function prototypes
void fillArray(seatTable);
void showArray(const seatTable);

// ----------------------------------------------------------------------

int main() {

    // Define 3-D arrray to hold seat prices
    double seats[num_sections][rows_in_section][seats_in_row];

    fillArray(seats);
    showArray(seats);

    return 0;

}


// ----------------------------------------------------------------------

void fillArray(seatTable array) {

    ifstream dataIn;
    dataIn.open("8-21_seats.dat");

    if(!dataIn)
        cout << "Error opening file.\n";
    else
    {
        for (int section = 0; section < num_sections; section++)
            for (int row = 0; row < rows_in_section; row++)
                for (int seat = 0; seat < seats_in_row; seat++)
                    dataIn >> array[section][row][seat];

        dataIn.close();
    }

}

// ----------------------------------------------------------------------

void showArray( const seatTable array) {

    cout << fixed << showpoint << setprecision(2);

    for ( int section = 0; section < num_sections; section++)
    { 
        cout << "\n\nSection" << (section+1);
        for (int row = 0; row < rows_in_section; row++)
        {
            cout << "\nRow " << (row+1) << ": ";
            for (int seat = 0; seat < seats_in_row; seat++)
                cout << setw(7) << array[section][row][seat];
        }
    }

    cout << endl;

}

// ----------------------------------------------------------------------



