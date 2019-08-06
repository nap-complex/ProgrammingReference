/*
   This program uses a partially-filled array to store monthly sales figures
   for a company's regional offices.  It then finds and displays
   the total, average, and a listing of the offices with sales below the 
   average. The data to fill the array is read in from a file and the number 
   data values are counted.
*/
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main() {

    const int size = 20;
    ifstream dataIn;
    int numOffices,
        count;
    double sales[size],
        totalSales = 0.0,
        averageSales;

    // Open the data file
    dataIn.open("8-11_sales.dat");
    if (!dataIn)
        cout << "Error opening data file.\n";
    else



    {
        // Fill the array with data from the file
        // Counting and summing as they are read in
        count = 0;
        while ( count < size && dataIn >> sales[count] )
        {
            totalSales += sales[count];
            count++;
        }

        numOffices = count;
        dataIn.close();

        // Calculate average sales
        averageSales = totalSales / numOffices;

        // Display total and average
        cout << fixed << showpoint << setprecision(2);
        cout << "The total sales are    $"
            << setw(9) << totalSales << endl;
        cout << "The average sales are    $"
            << setw(9) << averageSales << endl;

        // Display figures for offices performing below the average
        cout << "\nThe following office have below-average "
            << "sales figures.\n";
        for (int office = 0; office < numOffices; office++ )
        {
            if (sales[office] < averageSales)
                cout << "Office " << setw(2) << ( office + 1 )
                    << " $" << sales[office] << endl;
        }
    }

    return 0;

}

