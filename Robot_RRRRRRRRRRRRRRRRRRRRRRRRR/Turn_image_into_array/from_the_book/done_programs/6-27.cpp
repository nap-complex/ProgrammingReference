// This program uses overloaded functions .
#include <iostream>
#include <iomanip>
using namespace std;

// -------------------------------------------------------------------------

// Function prototypes
int square(int);
double square(double);

// -------------------------------------------------------------------------

int main() {

    int userInt;
    double userReal;

    // Get an int and double 
    cout << "Enter an integer and a floating-point value: ";
    cin >> userInt >> userReal;

    // Display their squares
    cout << "Here are their squares: ";
    cout << fixed << showpoint << setprecision(2);
    cout << square(userInt) << " and " << square(userReal) << endl;

    return 0;

}  // end of main

// -------------------------------------------------------------------------

int square(int number){

    return number * number;

}

// -------------------------------------------------------------------------

double square(double number){

    return number * number;

}

// -------------------------------------------------------------------------


