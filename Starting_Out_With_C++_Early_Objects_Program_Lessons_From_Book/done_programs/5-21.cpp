// This program uses a loop to read in values
// from a file until the end of file is reached.
#include <iostream>
#include <fstream>              // Needed to use files
using namespace std;


int main(){

    ifstream inputFile;         // File stream object
    int numberOfDays = 0;       // Counts the records in the file
    double sales,               // Sales amount for a day
           totalSales = 0.0;    // Accumulator

    // Open the input file
    inputFile.open("5-19_sales.txt");

    // Loop until the EOF is reached
    while (inputFile >> sales)  // If a value was read
    {
        totalSales += sales;
        numberOfDays++;
    }

    // Close the file
    inputFile.close();

    cout << "Total sales for the " << numberOfDays << " days were $" << totalSales << endl;

    return 0;

} // end of main
