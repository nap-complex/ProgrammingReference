// This program uses a function that returns true or false.
#include <iostream>
using namespace std;

// Function prototype
bool isEven(int);

int main() {

    int val;                // the value to be tested

    // Get a number from the user
    cout << "Enter an integer nad I will tell you ";
    cout << "if it is even or odd: ";
    cin >> val;

    // Indicate whether it is even or odd
    if (isEven(val))
        cout << val << " is even.\n";
    else 
        cout << val << " is odd.\n";

    return 0;

}


// -----------------------------------------------------------------

bool isEven(int number) {

    if ( number % 2 == 0 ) 
        return true;            // The number is even if there's no remainder
    else return false;          // Otherwise, the number is odd
    
}
