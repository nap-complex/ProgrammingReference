// This program lets the user enter a filename
// I don't think this program works as typed in the book, the book things there is an
// existing file called myData.txt which does not exist as far as I can tell
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main(){

    ifstream inputFile;
    string filename;
    int number;

    // Get the filename from the user
    cout << "Enter the filename: ";
    cin >> filename;

    // Open the input file
    inputFile.open(filename.c_str());

    // If the file successfully opened, process it
    if (inputFile)
    {
        // Read the numbers from the file and display them
        while (inputFile >> number)
            cout << number << endl;

        // Close the file
        inputFile.close();
    }
    else // The file could not be found and opened
    {
        // Display an error message
        cout << "Error opening the file.\n";
    }

    return 0;

}




