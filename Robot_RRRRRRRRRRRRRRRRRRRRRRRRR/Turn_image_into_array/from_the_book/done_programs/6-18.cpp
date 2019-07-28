// This program calculates gross pay.  It uses global constants.
#include <iostream>
#include <iomanip>
using namespace std;

// Global constants
const double pay_rate = 22.55;          // Hourly pay rate
const double base_hours = 40.0;         // Max non-overtime hours
const double ot_multiplier = 1.5;       // Overtime multiplier

// Function prototypes
double getBasePay(double);
double getOvertimePay(double);

int main() {

    double hours,               // Hours worked
           basePay,             // Base pay
           overtimePay = 0.0,   // Overtime pay
           totalPay;            // Total pay

    // Get the number of hours worked
    cout << "How many hours did you work? ";
    cin >> hours;

    // Get the amount of base pay
    basePay = getBasePay(hours);

    // Get overtime pay, if any
    if (hours > base_hours)
        overtimePay = getOvertimePay(hours);

    // Calculate the total pay
    totalPay = basePay + overtimePay;

    // Display the pay
    cout << setprecision(2) << fixed << showpoint;
    cout << "Base pay         $" << setw(7) << basePay << endl;
    cout << "Overtime pay     $" << setw(7) << overtimePay << endl;
    cout << "Total pay        $" << setw(7) << totalPay << endl;

    return 0;

}   // end of main

// ---------------------------------------------------------------------------

double getBasePay(double hoursWorked) {

    double basePay;

    if (hoursWorked > base_hours)
        basePay = base_hours * pay_rate;
    else
        basePay = hoursWorked * pay_rate;

    return basePay;

}  // end of getBasePay

// ---------------------------------------------------------------------------

double getOvertimePay(double hoursWorked) {

    double overtimePay;

    if (hoursWorked > base_hours)
    {
        overtimePay = 
            (hoursWorked - base_hours) * pay_rate * ot_multiplier;
    }
    else 
        overtimePay = 0.0;

    return overtimePay;

}

// ---------------------------------------------------------------------------

