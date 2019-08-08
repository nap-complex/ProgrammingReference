// This program demonstrates that changes to a function 
// parameter have no effect on the original argument.
#include <iostream>
using namespace std;

// Function prototype
void changeMe(int Value);

int main() {

    int number = 12;

    // Display the value in number
    cout << "In number is " << number << endl;

    // Call changeMe, passing the value in number as an argument
    changeMe(number);

    // Display the value in mnumber again
    cout << "Back in main again, number is still " << number << endl;

    return 0;

}


// ---------------------------------------------------------------------------

void changeMe(int myValue) {

    // Change the value of myValue to 0
    myValue = 0;

    // Display the value in myValue
    cout << "In changeMe, the value has been chaged to "
        << myValue << endl;

}


