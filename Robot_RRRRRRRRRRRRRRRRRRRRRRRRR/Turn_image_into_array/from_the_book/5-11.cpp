// This program takes daily sales figures over a period of time
// and calculates their total.  It then uses this total to compute
// the average daily sales.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    int numDays;                // Numbers of days
    double dailySales,          // The sales amount for a single day
           totalSales = 0.0,    // Accumulator, initialized with 0
           averageSales;        // The average daily sales amount

    // Get the number of days
    cout << "For how many days do you have sales figures? ";
    cin >> numDays;

    // Get the sales for each day and accumulate a total
    for (int day = 1; day <= numDays; day++)                // day is the counter
    {
        cout << "Enter the sales for day " << day << ": ";
        cin >> dailySales;
        totalSales += dailySales;                           // Accumulate the running total
    }

    // Compute the average daily sales
    averageSales = totalSales / numDays;

    // Display the total sales and average daily sales
    cout << fixed << showpoint << setprecision(2);
    cout << "\nTotal sales:         $" << setw(8) << totalSales;
    cout << "\nAverage daily sales: $" << setw(8) << averageSales << endl;

    return 0;

} // end of main
