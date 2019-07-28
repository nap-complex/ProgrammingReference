// This program shows how the exit function causes a program
// to stop executing.
#include <iostream>
#include <cstdlib>      // Needed to use the exit function
using namespace std;

// Function prototype
void someFunction();

int main() {

    someFunction();

    return 0;

} // end of main

void someFunction() {

    cout << "this program terminates with the exit function.\n";
    cout << "Bye!\n";
    exit(0);
    cout << "This message will never be displayed\n";
    cout << "because the program has already terminated.\n";

}  // end of someFunction
