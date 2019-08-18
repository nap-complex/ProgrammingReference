// This is the FizzBuzz program challege from Tom Scotts 
// vid on youTube: https://www.youtube.com/watch?v=QPZ0pIK_wsc

#include <iostream>
#include <iomanip>
using namespace std;

int main() {

    int num;
    int tracker = 0;

    cout << "\n*******************************************\n";


    for ( num = 1; num <= 100; num++ ) 
    {
        tracker++;
        if ( tracker % 5 == 0 ) 
        {
            cout << "\n\n";
        } else
        {
            cout << "       ";
        }
           
        if (( num % 3 == 0 ) && ( num % 5 == 0 ))
            cout << right << setw(12) << "FizzBuzz" << "(" << num << ")";
        else if ( num % 3 == 0 ) 
            cout << right << setw(12) << "Fizz" << "(" << num << ")";
        else if ( num % 5 == 0 )
            cout << right << setw(12) << "Buzz" << "(" << num << ")";
        else
            cout << right << setw(12) <<  num;
    }


    cout << "\n*******************************************\n";

    return 0;

}





