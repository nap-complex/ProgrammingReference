// This program has two loops.  The first displays the numbers
// from 1 up to 5.  The second displays the numbers from 5 down to 1.
// The program uses the ++ and -- operators to change the value
// of the loop control variables.
#include <iostream>
using namespace std;

int main(){

    int countUp = 1;         // Initialize the first loop control variable to 1
        while (countUp < 6)
        {
            cout << countUp << "   ";
            countUp++;      // the ++ operator increments coutUp
        }
        cout << endl << endl;

        
    int countDown = 5;         // Initialize the first loop control variable to 5
        while (countDown > 0)
        {
            cout << countDown << "   ";
            countDown--;      // the -- operator increments coutUp
        }
        cout << endl << endl;

       
    return 0;

} 
