// This program has a partially initialized array.
#include <iostream>
using namespace std;

int main() {

    const int size = 7;
    int numbers[size] = { 1, 2, 4, 8 };   // Initialize the first 4 elements

    cout << "Here are the contents of the array:\n";
    for ( int i = 0; i < size; i++ ) 
        cout << numbers[i] << " ";
    cout << endl;

    return 0;

}


