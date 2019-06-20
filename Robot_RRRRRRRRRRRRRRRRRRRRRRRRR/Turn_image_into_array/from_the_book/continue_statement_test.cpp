#include <iostream>
using namespace std;

int main() {

    cout << "\n\n------------------------------------------------------\n";    
    cout << "\nLooping some numbers:\n";

    for (int i=0; i<10; i++) 
    {
        cout << "\ni => " << i;
    }

    cout << "\n\n------------------------------------------------------\n";    

    cout << "\nLooping some numbers with a continue statement to skip the mod 3's:\n";
    for (int i=0; i<10; i++) 
    {
        if ( i % 3 == 0 ) continue;
        cout << "\ni => " << i;
    }

    cout << "\n\n------------------------------------------------------\n\n";    

}
