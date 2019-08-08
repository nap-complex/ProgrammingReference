/*
    jlf  -  Aug 6, 2019

    cout << (void*)someFunction" seems to return the memory address
    for that function.  "cout << someFunction" seems to return '1' as
    a boolean telling you that this function exists.  That's my story
    and I'm sticking to it, for now.
*/
#include <iostream>
using namespace std;


void someFunc();
double otherFunc(int);


int main() {



    cout << "\n***********************************************************\n";

    someFunc();

    cout << "\nFunc? => " << (void*)someFunc;
    cout << "\nFunc? => " << someFunc;
    
    cout << "\notherFunc? => " << otherFunc;
    cout << "\npointer to function? => " << &someFunc;

    otherFunc(4);


    cout << "\n***********************************************************\n";


} 

void someFunc() {

    cout << "\nHello World from someFunc!\n";

}


double otherFunc(int i) {

    cout << "\nThis is that other function.\n";
    cout << "\n-------------------------------\n";

    cout << "\n" << i;
    i = 10;
    cout << "\n" << i;

    cout << "\n-------------------------------\n";

}
