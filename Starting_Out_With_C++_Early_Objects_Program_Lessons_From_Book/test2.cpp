// This program uses a for loop to display the numbers 1-5
// and their squares
#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    int num;

    cout << "Number   Square\n";
    cout << "---------------\n";

    for (num = 1; num <= 15; num++)
    {
        cout << setw(4) << num << setw(7) << (num * num) << endl;
        num++;
    }
    
    return 0;

}


