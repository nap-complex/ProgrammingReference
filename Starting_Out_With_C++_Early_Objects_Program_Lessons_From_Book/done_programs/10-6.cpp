// This program processes an array using pointer notation.
#include <iostream>
using namespace std;

int main() {

    const int size = 5;  // Size of the array
    int numbers[size];

/*
    // Get values to store in the array
    // Use pointer notation instead of subscripts
    cout << "Enter " << size << " numbers: ";
    for (int count = 0; count < size; count++)
        cin >> *(numbers + count);
*/
    // aint nobody got time for that...
    numbers[0] = 12;
    numbers[1] = 34;
    numbers[2] = 56;
    numbers[3] = 78;
    numbers[4] = 90;


    // Display the values in the array
    // Use pointer notation instead of subscripts
    cout << "Here are the numbers you entered: \n";
    for (int count = 0; count < size; count++)
        cout << *(numbers + count) << " ";
    cout << endl;

    cout << "Here are the pointers to them: \n";
    for (int count = 0; count < size; count++)
        cout << (numbers + count) << " ";
    cout << endl;

    return 0;

}
    
