// This program reads data from a file.
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main(){

    ifstream inputFile;
    string name;

    // Open the input file
    inputFile.open("5-17_data_file_Friends.txt");

    cout << "Reading data from the file.\n";

    inputFile >> name;  // Read name 1 from the file and display it
    cout << name << endl;

    inputFile >> name;  // Read name 2 from the file and display it
    cout << name << endl;

    inputFile >> name;  // Read name 3 from the file and display it
    cout << name << endl;

    inputFile.close();  // Close the file

    return 0;

}



