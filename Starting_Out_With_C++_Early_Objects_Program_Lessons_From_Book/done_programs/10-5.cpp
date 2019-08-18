// This program shows an array name being dereferenced with the *
// operator.
#include <iostream>
using namespace std;

int main() {

    short numbers[] = { 10, 20, 30, 40, 50 };
    char letters[] = { '1', '2', '3', '4', '5' };

    cout << "\n------------------------------------------------------------\n";

    cout << "The first element of the array is ";
    cout << *numbers << endl;


    // The following is not part of the original thing

    short *ptr;
    ptr = &numbers[0];
    

    cout << "\n\nDid something happen => " << ptr << "\n\n";

    for ( int i = 0; i < 5; i++ )
        cout << "\nDid something else happen => " << &numbers[i];

    cout << "\n------------------------------------------------------------\n";

    for ( int i = 0; i < 5; i++ )
        cout << "\nDid something else happen again => " << &letters[i];

    cout << "\n\n";
    cout << "\nWhat the heck is it with chars and pointers?\n";

    cout << "\n------------------------------------------------------------\n";

    return 0;

}


