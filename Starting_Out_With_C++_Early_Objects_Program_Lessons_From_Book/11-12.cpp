// This program demonstrates the string class's 
// overloaded [] operator.
#include <iostream>
#include <string>
using namespace std;

int main() {

    string name = "Williams";
    
    cout << "\n********************************************\n";

    cout << "here are the letters in your name: \n";
    for ( int x=0; x < name.length(); x++)
        cout << name[x] << ' ';
    cout << "\nEnter a character and press Enter: \n\n";
    //cin >> name[2];
    // aint nobody got time for that...
    name[2] = 'x';
    
    cout << "Now, here are the letters in your name: \n";
    for (int x=0; x < name.length(); x++)
        cout << name[x] << ' ';

    cout << "\n********************************************\n";

    return 0;

}


