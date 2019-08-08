// This program has three functions: main, first, and second.
#include <iostream>
using namespace std;

/****************************************
 *           first                      *
 *  This function displays a message.   *
 ****************************************/

void first()
{
     cout << "I am now inside the first function.\n";
}

/****************************************
 *           second                     *
 *  This function displays a message.   *
 ****************************************/

void second()
{
    cout << "I am now inside the second function.\n";
}

/****************************************
 *                main                  *
 ****************************************/

int main() {

    cout << "I am starting in function main.\n";
    first();
    second();
    cout << "Back in function main again.\n";

    return 0;
}


