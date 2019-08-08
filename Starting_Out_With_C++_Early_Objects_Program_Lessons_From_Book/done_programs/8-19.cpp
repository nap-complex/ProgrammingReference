/*
    Well, this program doesn't run because there is no data file
    for it.  There isn't one in the book, so screw it.
*/
// This program uses a dwo-dimensional array.  The 
// data stored in the array is read in from a file.
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

int main() {

    const int num_divs = 3;
    const int num_qtrs = 4;
    double sales[num_divs][num_qtrs];
    double totalSales = 0;
    int div, qtr;
    ifstream datafile;

    datafile.open("8-19_sales2.dat");
    if (!datafile)
        cout << "Error opening data file.\n";
    else
    {
        cout << fixed << showpoint << setprecision(2);
        cout << "Quarterly Sales by Division\n\n";

        // Nested loops are used to fill the array with quarterly 
        // sales figures for each division and to display the data
        for (div = 0; div < num_divs; div++)
        {
            for (qtr = 0; qtr < num_qtrs; qtr++)
            {
                cout << "Division " << (div + 1)
                    << ", Quarter " << (qtr + 1) << ": $";
                datafile >> sales[div][qtr];
                cout << sales[div][qtr] << endl;
            }
            cout << endl;
        }
        datafile.close();

        // Nested loops are used to add all the elements

        for (div = 0; div < num_divs; div++)
        {
            for (qtr = 0; qtr < num_qtrs; qtr++)
                totalSales += sales[div][qtr];
        }

        // Display the total
        cout << "The total sales for the company are: $";
        cout << totalSales << endl;
    }

    return 0;

}


