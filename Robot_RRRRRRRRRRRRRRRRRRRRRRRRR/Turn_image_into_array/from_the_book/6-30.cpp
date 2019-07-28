// This program is a driver for testing the showFees function.
#include <iostream>
#include <string>
using namespace std;

// Funciton prototype 
void showFees(string, double, int);

int main() {

    cout << "Calling the showFees function with arguments "
        << "Adult, 120.0, 3.\n";
    showFees("Adult", 120.0, 3);

    cout << "Calling the showFees function with arguments "
        << "Child, 60.0, 2.\n";
    showFees("Child", 60.0, 2);

    cout << "Calling the showFees function with arguments "
        << "Senior, 100.0, 4.\n";
    showFees("Senior", 100.0, 4);

    return 0;

} // end of main


void showFees(string memberType, double rate, int months) {

    cout << endl
        << "Membership Type : " << memberType << "     "
        << "Monthly rate $"     << rate     << endl
        << "Number of months: " << months << endl
        << "Total charges   : $" << ( rate * months)
        << endl << endl;

} // end of showFees



