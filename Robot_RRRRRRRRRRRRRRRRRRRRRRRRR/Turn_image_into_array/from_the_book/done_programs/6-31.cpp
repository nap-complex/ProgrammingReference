// This program finds the probability of winning a "mini" lottery when
// the user's set of numbers must exactly match the set drawn by the
// lottery organizers.  In addition to main, it uses three functions.

#include <iostream>
#include <iomanip>
using namespace std;

// -----------------------------------------------------------------------------

// Function prototypes
void getLotteryInfo(int&, int&);
long int computeWays(int, int);
long int factorial(int);

int main() {

    int pickFrom,               // The number of numbers to pick from
        numPicks;               // The number of numbers to select
    long int ways;              // The number of different possible
                                // ways to pick the set of numbers

    cout << "This program will tell you your probability of "
        << "winning \"Little Lotto\". \n";
    getLotteryInfo(pickFrom, numPicks);
    ways = computeWays(pickFrom, numPicks);

    cout << fixed << showpoint << setprecision(4);
    cout << "\nYour chance of winning the lottery is "
        << "1 chance in " << ways << ".\n";
    cout << "this is a probablity of " << (1.0 / ways ) << "\n";

    return 0;

} // end of main

// -----------------------------------------------------------------------------

void getLotteryInfo(int& pickFrom, int& numPicks) {

    cout << "\nHow many numbers (1-12) are there to pick from? ";
    cin >> pickFrom;

    while (pickFrom < 1 || pickFrom > 12)
    {
        cout << "There must be between 1 and 12 numbers.\n"
            << "How many numbers (1-12) are there to pick from? ";
        cin >> pickFrom;
    }  // end of while

    cout << "How many numbers must you pick to play? ";
    cin >> numPicks;

    while (numPicks < 1 || numPicks > pickFrom)
    {
        if (numPicks < 1)
            cout << "You must pick at least one number.\n";
        else
            cout << "You must pick " << pickFrom << " or fewer numbers.\n";

        cout << "How many numbers must you pick to play? ";
        cin >> numPicks;
        
    } // end of while

} // end of getLotteryInfo(... 

// -----------------------------------------------------------------------------

long int computeWays(int n, int k) {

    return ( factorial(n) / factorial(k) / factorial(n-k) );

} // end of computeWays...

// -----------------------------------------------------------------------------

long int factorial(int number) {

    long int factTotal = 1;

    for (int count = number; count >= 1; count--)
    {
        factTotal *= count;
    }

    return factTotal;

}  // end of factiorial...

// -----------------------------------------------------------------------------



