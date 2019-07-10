// This program illustrates two appropriate uses
// of passing arguments by reference.
#include <iostream>
using namespace std;

// ---------------------------------------------------------------------

// Funtion prototypes
void getNums(int&, int&);
void orderNums(int&, int&);

// ---------------------------------------------------------------------

int main() {

    int small, big;

    // Call getNums to input the two numbers
    getNums(small, big);

    // Call orderNums to put the numbers in order
    orderNums(small, big);

    // Display the new values
    cout << "The two input numbers ordered smallest to biggest are "
        << small << " and " << big << endl;

    return 0;

}  // end of main


// ---------------------------------------------------------------------

void getNums(int &input1, int &input2) {

    cout << "Enter an integer: ";
    cin >> input1;

    cout << "Enter a second integer: ";
    cin >> input2;

}  // end of getNums

// ---------------------------------------------------------------------

void orderNums ( int &num1, int &num2 ) {

    int temp;

    if ( num1 > num2 )
    {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

}

// ---------------------------------------------------------------------


