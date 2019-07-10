// This program uses 2 functions: a void function with a reference
// variable as a prameter, and a value-returning function.
#include <iostream>
using namespace std;

// -------------------------------------------------------------

// Function protoypes:
void getNum(int &);
int doubleNum(int);

// -------------------------------------------------------------

int main() {

    int value;

    // Call getNum to get a number and store it in value
    getNum(value);

    // Call doubleNum, passing it the number stored in value
    // Assign value the number returned by the function
    value = doubleNum(value);

    // Display the resulting number
    cout << "That value doubled is " << value << endl;

    return 0;

}  // end of main

// -------------------------------------------------------------

void getNum(int &userNum) {

    cout << "Enter a number:  ";
    cin >> userNum;

} // end of getNum

// -------------------------------------------------------------

int doubleNum(int number) {

    return number * 2;

} // end of doubleNum

// -------------------------------------------------------------

