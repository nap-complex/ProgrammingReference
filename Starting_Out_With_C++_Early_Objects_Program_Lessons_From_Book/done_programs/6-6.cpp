// This program demonstrates a function with a parameter
#include <iostream>
using namespace std;

// Function prototype
void displayValue(int num);

int main() {

    cout << "I am passing 5 to displayValue.\n";
    displayValue(5);            // Call displayValue with argument 5
    cout << "Now I am back in main.\n";

    return 0;

} // end of main

// ************************************************************************************

void displayValue(int num){

    cout << "The value is " << num << endl;

}  // end of displayValue(...
