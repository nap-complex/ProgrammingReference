/*
        Ran this program on HPLAP Windows 10 and it worked.
        It won't run on this linux computer, obviously
*/

// This program writes the ABCs in green, red, and yellow,
// displaying them diagonally across the screen so they
// appear to be climbing down a staircase.
#include <iostream>
#include <windows.h>    // Needed to display colors and call Sleep
using namespace std;

// --------------------------------------------------------------------

// Prototype
void printSpaces(int n);

// --------------------------------------------------------------------

int main() {

    // Bright Green = 10    Bright Red = 12  Bright Yellow = 14

    // Get the handle to standard output device ( the console )
    HANDLE screen = GetStdHandle(std_output_handle);

    // Write the ABCs using 3 colors
    // Display 2 perline, stair stepping across the screen

    int color = 10;     // Starting color = green

    for (char letter = 'A'; letter <= 'Z'; letter+=2)
    {
        SetConsoleTextAttribute (screen, color);    // Set the color
// This next line is the line from the book that does not seem to work
// I modified to to the next line bellow and it works
//      printSpaces(letter='A');                    // Indent
        printSpaces(letter);                        // Indent
        cout << letter                              // Print 2 letters
            << static_cast<char>(letter+1) << endl;
        color += 2;                                 // Choose next color
        if (color > 14)
            color = 10;

        Sleep(280);     // Pause between characters to watch them appear

    } // end of for

    // Restore normal text attribute ( i.e. white)
    SetConsoleTextAttribute(screen, 7);

    // this is here to pause the terminal long enough to see if 
    // the output was as expected
    std::getchar();

    return 0;
    
} // end of main

// --------------------------------------------------------------------

void printSpaces(int n) {

    for (int space = 1; space <= n; space++)
        cout << " ";

} // end of printSpaces

// --------------------------------------------------------------------




