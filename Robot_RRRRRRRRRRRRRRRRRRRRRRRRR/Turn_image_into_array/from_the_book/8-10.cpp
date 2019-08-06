/*
   This program uses an array to store monthly sales figures
   for a company's regional offices.  It then finds and displays
   the total, average, highest, and lowest sales amounts.
   The data to fill the array is read in from a file.
*/
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main() {

    const int num_offices = 12;
    ifstream dataIn;
    int office;
    double sales[num_offices],
        totalSales = 0.0,
        averageSales,
        highestSales,
        lowestSales;

    // Open the data file
    dataIn.open("8-10_sales.dat");
    if (!dataIn)
        cout << "Error opening data file.\n";
    else
    {
        // Fill the array with data from the file
        for (office = 0; office < num_offices; office++)
            dataIn >> sales[office];
        dataIn.close();

        // Sum all the array elements
        for (office = 0; office < num_offices; office++)
            totalSales += sales[office];

        // Calculate average sales
        averageSales = totalSales / num_offices;

        // Find highest and lowest sales amounts
        highestSales = lowestSales = sales[0];
        for (office = 1; office < num_offices; office++)
        {
            if (sales[office] > highestSales)
                highestSales = sales[office];
            else if ( sales[office] < lowestSales )
                lowestSales = sales[office];
        }

        // Display results
        cout << fixed << showpoint << setprecision(2);
        cout << "Total sales $" << setw(9) << totalSales << endl;
        cout << "Average sales $" << setw(9) << averageSales << endl;
        cout << "Highest sales $" << setw(9) << highestSales << endl;
        cout << "Lowest sales $" << setw(9) << lowestSales << endl;
    }

    return 0;

}











