// This program uses the & operator to determine a 
// vaiable's address.
#include <iostream>
using namespace std;

char letter;
short number;
float amount;
double profit;
char ch;
long testLong;
int testInt;

int main() {

    // Print address of each variable
    // The cast to long makes addresses print in decimal
    // rather than in hexadecimal
    cout << "Address of letter is:   " << long(&letter) << endl;
    cout << "Address of number is:   " << long(&number) << endl;
    cout << "Address of amount is:   " << long(&amount) << endl;
    cout << "Address of profit is:   " << long(&profit) << endl;
    cout << "Address of ch is:   " << long(&ch) << endl;


    // Thus ends the program part from the book
    // And now, to try and convert an int to a hex:
    // seems there is some sort of chaos when you try this with chars
    // maybe look into this some day

    cout << "\nNow lets see that in HEX => \n";
    cout << "Address of letter is:   " << long(&letter) << endl;
    cout << "Address of number is:   " << &number << endl;
    cout << "Address of amount is:   " << &amount << endl;
    cout << "Address of profit is:   " << &profit << endl;
    // this is an example of what doesn't work:
    cout << "Address of ch is:   " << &ch << endl;

    return 0;

}
