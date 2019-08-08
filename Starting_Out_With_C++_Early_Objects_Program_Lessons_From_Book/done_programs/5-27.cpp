// This program writes the ABCs in green, red, and yellow.
/*
   This won't run on the Linux machine so we ran it on the remote 
   Windows 10 machine in the garage.  It worked.  Now go see what 
   it would take to make the out put happen with Linux.
   Just like the last one.
*/

#include <iostream>
#include <windows.h>            // Needed to display colors and call Sleep 
using namespace std;

int main(){

    // Bright Green = 10    Bright Red = 12     Bright Yellow = 11

    // Creat a handle to the computer screen.
    HANDLE screen = GetStdHandle(STD_OUTPUT_HANDLE);

    int color = 10;             // starting color = green
    // Write 16 lines of 16 different colors.
    for (char letter = 'A'; letter <= 'Z'; letter++)
    {
        SetConsoleTextAttribute(screen, color);     // set the color
        cout << letter << "  " << endl;             // print the letter

        color += 2;
        if (color > 14)
            color = 10;

        Sleep(280);     // pause between characters to watch them appear
    }

    // Restore the normal text color
    SetConsoleTextAttribute(screen, 7);

    return 0;

}



