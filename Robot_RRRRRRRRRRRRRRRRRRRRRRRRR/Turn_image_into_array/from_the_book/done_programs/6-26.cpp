// The program reads a set of daily high temperatures from a file
// and displays them.  It demonstrates how to pass a file to a 
// function.  The function argument, which is a file stream object,
// must be passed by reference.
#include <iostream>
#include <fstream>
using namespace std;

// -------------------------------------------------------------------

// prototypes:
void readFile(ifstream&);

// -------------------------------------------------------------------

int main() {

    ifstream dataIn;

    dataIn.open("6-26_weather.dat");
    if (dataIn.fail())
        cout << "Error opening data file.\n";
    else
    {
        readFile(dataIn);
        dataIn.close();
    }

    return 0;

} // end of main

// -------------------------------------------------------------------

void readFile(ifstream &someFile) {

    int temperature;

    while ( someFile >> temperature)
        cout << temperature << "  ";
    cout << endl;

}  // end of readFile

// -------------------------------------------------------------------


