// This program uses subscript notation with a pointer
// variable and pointer notation with an array name.
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    const int num_coins = 5;
    double coins[num_coins] = { 0.05, 0.1, 0.25, 0.5, 1.0 };
    double *doublePtr;      // Pointer to a double

    // Assign the address of the coins array to doublePtr
    doublePtr = coins;
   
    cout << "\n*******************************************************************\n";
    
    // This part added by me:
    cout << "\nThis is the coins iterated the old fashioned way:\n";
    for (int count = 0; count < num_coins; count++)
        cout << coins[count] << " ";
    cout << endl;

    // Display the constents of the coins array
    // Use subscripts with the pointer!
    cout << setprecision(2);
    cout << "Here they are iterated through pointer[]:\n";
    for (int count = 0; count < num_coins; count++)
        cout << doublePtr[count] << " ";
    cout << endl;

    // Display the contents of the coins array again, but 
    // this time use pointer notation with the array name!
    cout << "Here they are iterated through *pointer:\n";
    for (int count = 0; count < num_coins; count++)
        cout << *(coins + count) << " ";
    cout << endl;

    cout << "\n*******************************************************************\n";
    
    return 0;

}

