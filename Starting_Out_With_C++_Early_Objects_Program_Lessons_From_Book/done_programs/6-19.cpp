// This program demonstrates how a local variable or constant
// can shadow the name of a global variable or constant.
#include <iostream>
using namespace std;

void california();          // Function prototype

const int birds = 500;      // Global constant


int main() {

    cout << "In main there are " << birds << " birds.\n";

    california();

    return 0;

}

// ----------------------------------------------------------

void california(){

    const int birds = 10000;

    cout << "In california there are " << birds << " birds.\n";

}
