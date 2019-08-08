// This program demonstrates Windows functions to print colored
// text.  It displays "Hello World" in 16 different colors.
/*
   This won't run on the Linux machine so we ran it on the remote 
   Windows 10 machine in the garage.  It worked.  Now go see what 
   it would take to make the output happen with Linux.
*/

#include <iostream>
#include <windows.h>            // Needed to display colors and call Sleep 
using namespace std;

int main(){

    // Creat a handle to the computer screen.
    HANDLE screen = GetStdHandle(STD_OUTPUT_HANDLE);

    // Write 16 lines of 16 different colors.
    for (int color = 0; color < 16; color++);
    {
        SetConsoleTextAttribute(screen, color);
        cout << " Hello World!" << endl;
        Sleep(400);             // Pause between lines to watch them appear
    }

    // Restore the normal text color
    SetConsoleTextAttribute(screen, 7);

    return 0;

}



