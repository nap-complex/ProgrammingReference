// This program demonstrates the Length class's overloaded 
// +, -, ==, and < operators.
#include <iostream>
#include "11-10_Length.h"
using namespace std;

int main() {

    Length first(0), second(0), third(0);
    int f, i;
    cout << "Enter a distance in feet and inches: ";
//    cin >> f >> i;
    // aint nobody got time for that...
    f = 6; 
    i = 5;
    cout << "f = " << f << "  i = " << i << endl;
    first.setLength(f, i);
    cout << "Enter an other distance in feet and inches: ";
//    cin >> f >> i;
    // aint nobody got time for that...
    f = 3;
    i = 10;
    cout << "f = " << f << "  i = " << i << endl;
    second.setLength(f, i);
   
    // Test the + and - operators

    third = first + second;
    cout << "first + second = ";
    cout << third.getFeet() << " feet,  ";
    cout << third.getInches() << " inches.\n";
    
    third = first - second;
    cout << "first - second = ";
    cout << third.getFeet() << " feet,  ";
    cout << third.getInches() << " inches.\n";

    // Test the relational operators
    cout << "first == second => ";
    if (first == second) cout << "true"; else cout << "false";
    cout << "\n";
    cout << "first < second => ";
    if (first < second) cout << "true"; else cout << "false";
    cout << "\n";

    return 0;

}












