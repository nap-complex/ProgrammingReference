// Aug 17, 2019  -  JLF
// This program uses a pointer to display
// the contents of an array.
/*
   okay, I've started to screw around with the code out of bordom, but 
   the original intent is still intact... probably
*/
#include <iostream>
using namespace std;

int main() {

    const int SIZE = 8;
    int set[] = { 5, 10, 15, 20, 25, 30, 35, 40 };
    int *numPtr;    // pointer

    cout << "\n*******************************************************\n";

    // Make numPtr point to the set array
    numPtr = set;

    // Use the pointer to display the array elements
    cout << "The numbers in set are:\n";
    for (int index = 0; index < SIZE; index++)
    {
        cout << *numPtr << " ";
        numPtr++;
    }

    // Display the array elements in reverse order
    cout << "\nThe number in set backwards are:\n";
    for (int index = 0; index < SIZE; index++)
    {
        numPtr--;
        cout << *numPtr << " ";
    }

    cout << "\n*******************************************************\n";

    return 0;

}


