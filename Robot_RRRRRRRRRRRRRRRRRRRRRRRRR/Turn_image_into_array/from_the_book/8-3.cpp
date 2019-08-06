// This program reads employee work hours froma  file
// and stores them in an int array.  It uses one loop
// to input the hours and another to display them.
#include <iostream>
#include <fstream>
using namespace std;

int main() {

    const int num_employees = 6;
    int hours[num_employees];
    int count = 0;

    ifstream datafile;

    // Open the data file.
    datafile.open("8-3_work.dat");
    if (!datafile)
        cout << "Error opening data file\n";
    else
    {
        while (count < num_employees && datafile >> hours[count] )
            count++;

        datafile.close();

        cout << "The hours worked by each employee are\n";
        for (int employee = 0; employee < count; employee++)
        {
            cout << "Employee " << employee+1 << ": ";
            cout << hours[employee] << endl;
        }

    }

    return 0;

}

    
