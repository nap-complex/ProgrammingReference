// This program demonstrates an enumerated data type.
#include <iostream>
using namespace std;

// Declare the enumerated type
enum Roster { Tom = 1, Sharon, Bill, Teresa, John };
                    // Sharon - John will be assigned default values 2-5.

int main() {

    int who;

    cout << "This program will give you a student's brithday. \n";
    cout << "Whose birthday do you want to know? \n";
    cout << "1 = Tom \n";
    cout << "2 = Sharon \n";
    cout << "3 = Bill \n";
    cout << "4 = Teresa \n";
    cout << "5 = John \n";
    cin >> who;

    switch (who)
    {
        case Tom     : cout << "\nTom's birthday is January 3.\n";
                      break;
        case Sharon  : cout << "\nSharon's birthday is April 2.\n";
                      break;
        case Bill    : cout << "\nBill's birthday is December 9.\n";
                      break;
        case Teresa  : cout << "\nTeresa's birthday is Feruary 2.\n";
                      break;
        case John    : cout << "\nJohn's birthday is June 17.\n";
                      break;
        default      : cout << "\nInvallid selection\n";
    }

    return 0;

} // end of main
