// This program demonstrates the postfix and prefix 
// modes of the increment nad decrement operators.
#include <iostream>
using namespace std;

int main(){

    int num = 4;

    // Illustrate postfix and prefix ++ operator
    cout << num << "  ";
    cout << num++ << "  ";
    cout << num << "  ";
    cout << ++num << "\n\n";

    // Illustrate postfix and prefix -- operator
    cout << num << "  ";
    cout << num-- << "  ";
    cout << num << "  ";
    cout << --num << "\n\n";

    return 0;

}

