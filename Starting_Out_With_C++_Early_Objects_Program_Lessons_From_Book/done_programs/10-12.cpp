/*
   Aug 17, 2019  -  JLF

   This program demonstrates that a pointer may be used as a 
   parameter to accept the address of an array.  Either subscript
   or pointer notation may be used.
*/
#include <iostream>
#include <iomanip>
using namespace std;

// -----------------------------------------------------------------------

// Function protoypes
void getSales(double *sales, int size);
double totalSales(double *sales, int size);

// -----------------------------------------------------------------------

int main() {

    const int QUARTERS = 4; 
    double sales[QUARTERS];
    
//    getSales(sales, QUARTERS);
    // aint nobody got time for that...
    sales[0] = 10263.98;
    sales[1] = 12369.69;
    sales[2] = 11542.13;
    sales[3] = 14792.06;

    cout << setprecision(2);
    cout << fixed << showpoint;
    cout << "The total sales for the year are $";
    cout << totalSales(sales, QUARTERS) << endl;

    return 0;

}

// -----------------------------------------------------------------------

void getSales(double *array, int size) {

    for (int count = 0; count < size; count++)
    {
        cout << "Enter the sales figure for QUARTERS ";
        cout << (count +1) << ": ";
        cin >> array[count];
    }

}

// -----------------------------------------------------------------------

double totalSales(double *array, int size) {

    double sum = 0.0;

    for (int count = 0; count < size; count++)
    {
        sum += *array;
        array++;
    }
    return sum;

}

// -----------------------------------------------------------------------


