/*
   This worked on a windows 10 machine, Aug 4, 2019
*/

// This program creates a simple animation using Windows
// functions to simulate a yoyo moving down and up.
#include <iostream>
#include <windows.h>
using namespace std;

int main() {

    HANDLE screen = GetStdHandle(STD_OUTPUT_HANDLE);
    COORD pos = {40, 3};    // Start position
    SetConsoleCursorPosition(screen, pos);
    cout << "O" << endl;
    Sleep(500);

    // Watch the yoyo go down & back up 3 times
    for (int tossIt = 1; tossIt <= 3; tossIt++)
    {
        // Yoyo unwinds
        while (pos.Y <= 20) // pos.Y is the row
        {
            // Move the yoyo down 1 position and then pause
            SetConsoleCursorPosition(screen, pos);
            cout << "|" << endl;
            pos.Y++;
            SetConsoleCursorPosition(screen, pos);
            cout << "O" << endl;
            Sleep(100);
        }

        // Yoyo winds back up
        while (pos.Y > 3)
        {
            // Erase character at current position
            // Move yoyo up one position, then pause
            SetConsoleCursorPosition(screen, pos);
            cout << " " << endl;
            pos.Y--;
            SetConsoleCursorPosition(screen, pos);
            cout << "O" << endl;
            Sleep(100);
        }
    }

    return 0;

}

