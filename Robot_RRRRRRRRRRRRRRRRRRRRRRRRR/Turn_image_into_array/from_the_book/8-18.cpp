/*
    This program passes an array filled with sales data
    to functions which find and return it's total, highest,
    and lowest values.  The functions should not change the 
    array, so they each use a const array parameter.
*/

#include <iostream>
#include <iomanip>
using namespace std;

// ----------------------------------------------------------------

// Function prototypes
double sumArray (const double[], int);
double getHighest (const double[], int);
double getLowest (const double[], int);

// ----------------------------------------------------------------

int main() {

    const int num_days = 5;
    double sales[num_days],
        total,
        average,
        highest,
        lowest;

    // Get the sales data
    cout << "Enter the sales for this week.\n";
    for (int day = 0; day < num_days; day++)
    {
        cout << "Day " << ( day + 1 ) << ": ";
        cin >> sales[day];
    }

    // Get total sales and compute average sales
    total = sumArray(sales, num_days);
    average = total / num_days;

    // Get highest and lowest sales amounts
    highest = getHighest(sales, num_days);
    lowest = getLowest(sales, num_days);

    // Display results
    cout << fixed << showpoint << setprecision(2) << endl;
    cout << "The total sales are         $"
        << setw(9) << total << endl;
    cout << "The average sales amount is $"
        << setw(9) << average << endl;
    cout << "The highest sales amount is $"
        << setw(9) << highest << endl;
    cout << "The lowest sales amount is  $"
        << setw(9) << lowest << endl;

    return 0;

}
         
// ----------------------------------------------------------------

double sumArray(const double array[], int size) {

    double total = 0.0;

    for (int count = 0; count < size; count++)
        total += array[count];

    return total;

}

// ----------------------------------------------------------------

double getHighest(const double array[], int size) {

    double highest = array[0];

    for (int count = 1; count < size; count++)
    {
        if (array[count] > highest)
            highest = array[count];
    }

    return highest;

}

// ----------------------------------------------------------------

double getLowest(const double array[], int size) {

    double lowest = array[0];

    for (int count = 1; count < size; count++)
    {
        if (array[count] < lowest)
            lowest = array[count];
    }

    return lowest;

}

// ----------------------------------------------------------------





