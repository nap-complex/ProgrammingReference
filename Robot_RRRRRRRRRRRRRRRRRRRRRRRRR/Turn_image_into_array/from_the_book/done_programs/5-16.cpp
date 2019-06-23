// This program writes data to a file.
#include <iostream>
#include <fstream>              // Needed to use files
using namespace std;

int main(){

    ofstream outputFile;

    // Open the output file
    outputFile.open("5-16_demo_file.txt");

    cout << "Now writing data to the file.\n";

    // Write four names to the file
    outputFile << "Back\n";
    outputFile << "Beethoven\n";
    outputFile << "Mozart\n";
    outputFile << "Schubert\n";

    // Close the file
    outputFile.close();

    cout << "Done.\n";

    return 0;

} // end of main

